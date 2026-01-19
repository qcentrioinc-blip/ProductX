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

        const newLenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,
        });

        setLenis(newLenis);

        let frameId: number;

        const animate = (time: number) => {
            newLenis.raf(time);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId);
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
