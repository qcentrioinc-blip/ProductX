import { createContext, useRef, useEffect } from 'react';
import type { RefObject, ReactNode } from 'react';

export const ScrollContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

type ScrollProviderProps = {
    children: ReactNode;
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
    const scrollableContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.style.scrollBehavior = 'smooth';
        }
    }, []);

    return (
        <ScrollContext.Provider value={scrollableContainerRef}>
            <div 
                ref={scrollableContainerRef} 
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    overflow: 'auto',
                    overscrollBehavior: 'none'
                }}
            >
                {children}
            </div>
        </ScrollContext.Provider>
    );
};