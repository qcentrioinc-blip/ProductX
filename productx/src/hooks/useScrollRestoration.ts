import { useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook for scroll position restoration across page reloads.
 * Saves scroll position before unload and restores it on mount.
 * Works with Lenis smooth scroll library.
 * 
 * @param key - Unique key to identify the page (defaults to pathname)
 */
export const useScrollRestoration = (key?: string) => {
    const location = useLocation();
    const pageKey = key || location.pathname;
    const storageKey = `scrollPosition_${pageKey}`;
    const hasRestoredRef = useRef(false);
    const isRefreshRef = useRef(false);

    // Disable browser's default scroll restoration
    useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Detect if this is a page refresh (not initial load or navigation)
    useLayoutEffect(() => {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries.length > 0 && navEntries[0].type === 'reload') {
            isRefreshRef.current = true;
        }
    }, []);

    // Save scroll position before page unload and periodically
    useEffect(() => {
        const saveScrollPosition = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 0) {
                sessionStorage.setItem(storageKey, scrollY.toString());
            }
        };

        // Save on beforeunload (page refresh/close)
        window.addEventListener('beforeunload', saveScrollPosition);

        // Also save on scroll events (throttled)
        let scrollTimeout: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(saveScrollPosition, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [storageKey]);

    // Restore scroll position after component mounts
    useEffect(() => {
        if (hasRestoredRef.current) return;
        if (!isRefreshRef.current) return; // Only restore on refresh, not initial load

        const savedPosition = sessionStorage.getItem(storageKey);

        if (savedPosition) {
            const scrollY = parseInt(savedPosition, 10);

            if (!isNaN(scrollY) && scrollY > 0) {
                hasRestoredRef.current = true;

                // Multiple attempts to ensure scroll restoration works with Lenis
                const restoreScroll = (attempt: number = 0) => {
                    const maxAttempts = 10;
                    const delay = attempt === 0 ? 50 : 100;

                    setTimeout(() => {
                        // Force scroll using multiple methods
                        window.scrollTo({
                            top: scrollY,
                            behavior: 'instant' as ScrollBehavior
                        });

                        // Also try direct property assignment
                        document.documentElement.scrollTop = scrollY;
                        document.body.scrollTop = scrollY;

                        // Check if scroll was successful
                        const currentScroll = window.scrollY || document.documentElement.scrollTop;
                        const tolerance = 50; // Allow some tolerance

                        if (Math.abs(currentScroll - scrollY) > tolerance && attempt < maxAttempts) {
                            // Try again if scroll didn't work
                            restoreScroll(attempt + 1);
                        }
                    }, delay);
                };

                // Start restoration attempts after a short delay for DOM to be ready
                requestAnimationFrame(() => {
                    restoreScroll(0);
                });
            }
        }
    }, [storageKey]);

    return null;
};

export default useScrollRestoration;
