import { createContext, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

export const ScrollContext = createContext<Lenis | null>(null);

type ScrollProviderProps = {
    children: ReactNode;
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, 
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.2,
            touchMultiplier: 2,
            syncTouch: false,
            syncTouchLerp: 0.075,
            touchInertiaMultiplier: 35,
            infinite: false,
            autoResize: true,
        });

        lenisRef.current = lenis;

        let frameId: number;

        const animate = (time: number) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return (
        <ScrollContext.Provider value={lenisRef.current}>
            {children}
        </ScrollContext.Provider>
    );
};
