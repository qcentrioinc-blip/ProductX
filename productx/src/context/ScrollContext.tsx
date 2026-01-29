import { createContext, useState, useEffect, useLayoutEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

export const ScrollContext = createContext<Lenis | null>(null);

type ScrollProviderProps = {
    children: ReactNode;
};

const getStorageKey = (pathname: string) => `scrollPosition_${pathname}`;

const isPageRefresh = (): boolean => {
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    return navEntries.length > 0 && navEntries[0].type === 'reload';
};

const getSavedScrollPosition = (): number => {
    const pathname = window.location.pathname;
    const storageKey = getStorageKey(pathname);
    const savedPosition = sessionStorage.getItem(storageKey);
    return savedPosition ? parseInt(savedPosition, 10) : 0;
};

const needsScrollRestoration = (): boolean => {
    const targetScrollY = getSavedScrollPosition();
    return isPageRefresh() && !isNaN(targetScrollY) && targetScrollY > 0;
};

const RESTORE_STYLE_ID = 'scroll-restore-hide';
if (needsScrollRestoration()) {
    const style = document.createElement('style');
    style.id = RESTORE_STYLE_ID;
    style.textContent = `
        html { 
            visibility: hidden !important; 
        }
    `;
    document.head.appendChild(style);

    const targetY = getSavedScrollPosition();
    if (targetY > 0) {
        document.documentElement.scrollTop = targetY;
        window.scrollTo(0, targetY);
    }
}

const showPage = () => {
    const style = document.getElementById(RESTORE_STYLE_ID);
    if (style) {
        style.remove();
    }
};

const restoreScrollPosition = (targetScrollY: number, onComplete?: () => void) => {
    let attemptCount = 0;
    const maxAttempts = 15;

    const attemptRestore = () => {
        attemptCount++;
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (Math.abs(currentScroll - targetScrollY) > 50 && attemptCount < maxAttempts) {
            window.scrollTo({
                top: targetScrollY,
                behavior: 'instant' as ScrollBehavior
            });
            document.documentElement.scrollTop = targetScrollY;
            document.body.scrollTop = targetScrollY;

            // Check again after a frame
            requestAnimationFrame(() => {
                const newScroll = window.scrollY || document.documentElement.scrollTop;
                if (Math.abs(newScroll - targetScrollY) > 50) {
                    setTimeout(attemptRestore, 20 + (attemptCount * 10));
                } else {
                    // Success!
                    onComplete?.();
                }
            });
        } else {
            onComplete?.();
        }
    };

    attemptRestore();
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        const saveScrollPosition = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const pathname = window.location.pathname;
            const storageKey = getStorageKey(pathname);

            if (scrollY > 0) {
                sessionStorage.setItem(storageKey, scrollY.toString());
            }
        };

        window.addEventListener('beforeunload', saveScrollPosition);

        let scrollTimeout: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(saveScrollPosition, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEffect(() => {
        document.documentElement.style.overflowX = 'clip';
        document.body.style.overflowX = 'clip';

        const isTouchDevice =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0;
        const targetScrollY = getSavedScrollPosition();
        const shouldRestore = needsScrollRestoration();

        if (isTouchDevice) {
            if (shouldRestore) {
                restoreScrollPosition(targetScrollY, showPage);
            } else {
                showPage();
            }

            return () => {
                document.documentElement.style.overflowX = '';
                document.body.style.overflowX = '';
            };
        }

        // Ultra-smooth Lenis configuration
        const newLenis = new Lenis({
            duration: 1.2,
            easing: (t) => {
                return -(Math.cos(Math.PI * t) - 1) / 2;
            },
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.6,
            touchMultiplier: 1.0,
            infinite: false,
            autoResize: true,
            lerp: 0.08,
        });

        setLenis(newLenis);

        if (shouldRestore) {
            // Multiple attempts
            let restored = false;
            const attempts = [0, 50, 100, 200, 400];

            attempts.forEach((delay, index) => {
                setTimeout(() => {
                    if (restored) return;

                    const currentScroll = window.scrollY || document.documentElement.scrollTop;
                    if (Math.abs(currentScroll - targetScrollY) > 50) {
                        newLenis.scrollTo(targetScrollY, { immediate: true });
                        window.scrollTo({ top: targetScrollY, behavior: 'instant' as ScrollBehavior });
                        document.documentElement.scrollTop = targetScrollY;
                    }

                    if (index === attempts.length - 1) {
                        requestAnimationFrame(() => {
                            showPage();
                        });
                    } else {
                        // Check if we're done early
                        requestAnimationFrame(() => {
                            const newScroll = window.scrollY || document.documentElement.scrollTop;
                            if (Math.abs(newScroll - targetScrollY) <= 50) {
                                restored = true;
                                showPage();
                            }
                        });
                    }
                }, delay);
            });
        } else {
            showPage();
        }

        let frameId: number;
        const animate = (time: number) => {
            newLenis.raf(time);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        const handleVisibilityChange = () => {
            if (document.hidden) {
                newLenis.stop();
            } else {
                newLenis.start();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            cancelAnimationFrame(frameId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            newLenis.destroy();
            setLenis(null);
            document.documentElement.style.overflowX = '';
            document.body.style.overflowX = '';
        };
    }, []);

    // NEW: Reset scroll on route change
    const { pathname } = useLocation();

    useEffect(() => {
        if (!lenis) {
            window.scrollTo(0, 0);
        } else {
            lenis.scrollTo(0, { immediate: true });
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return (
        <ScrollContext.Provider value={lenis}>
            {children}
        </ScrollContext.Provider>
    );
};
