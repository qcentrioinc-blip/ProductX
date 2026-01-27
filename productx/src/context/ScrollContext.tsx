import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

export const ScrollContext = createContext<Lenis | null>(null);

type ScrollProviderProps = {
    children: ReactNode;
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Enforce no horizontal scroll using 'clip' to preserve sticky behavior
        document.documentElement.style.overflowX = 'clip';
        document.body.style.overflowX = 'clip';

        // Disable Lenis on touch devices for native responsiveness
        const isTouchDevice =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
            return () => {
                document.documentElement.style.overflowX = '';
                document.body.style.overflowX = '';
            };
        }

        // Ultra-smooth Lenis configuration
        const newLenis = new Lenis({
            duration: 1.2,
            easing: (t) => {
                // Custom easing: smooth start, smooth end (ease-in-out sine)
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

        let frameId: number;
        const animate = (time: number) => {
            // DIRECT PASS-THROUGH: Do not throttle requestAnimationFrame.
            // Modern browsers and Lenis handle synchronization better than manual timing.
            newLenis.raf(time);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        // Pause Lenis when tab is not visible
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

    return (
        <ScrollContext.Provider value={lenis}>
            {children}
        </ScrollContext.Provider>
    );
};
