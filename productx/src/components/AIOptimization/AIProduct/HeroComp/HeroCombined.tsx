import { useRef, useState, useEffect, useMemo, memo, Suspense } from "react";
import FloatingLines from "../../../HomePage/AIOptimization/AIFooterBackground";
import FinalHero from "../FinalHero";
import ImageContainer from "../ImageContainer";

const HeroCombined = () => {
    const heroSectionRef = useRef<HTMLElement>(null);
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    // FloatingLines configuration - memoized to prevent re-renders
    const ENABLED_WAVES = useMemo<Array<'top' | 'middle' | 'bottom'>>(() => ['top', 'bottom', 'middle'], []);
    const LINE_COUNT = useMemo(() => [4, 4, 4], []);
    const LINE_DISTANCE = useMemo(() => [8, 6, 4], []);

    // Use IntersectionObserver to detect when hero section is visible
    useEffect(() => {
        if (!heroSectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Pause animation when section is not visible
                    setIsHeroVisible(entry.isIntersecting);
                });
            },
            {
                root: null,
                rootMargin: '100px', // Start a bit before visible
                threshold: 0
            }
        );

        observer.observe(heroSectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Render immediately - no need to defer mounted state if we want instant feel
    return (
        <section
            ref={heroSectionRef}
            className="bg-no-repeat bg-cover z-10 relative"
            style={{ minHeight: '100vh', contain: 'layout paint' }}
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Suspense fallback={null}>
                    <FloatingLines
                        linesGradient={[
                            '#00FFCC',
                            '#0099FF',
                            '#6600FF'
                        ]}
                        enabledWaves={ENABLED_WAVES}
                        lineCount={LINE_COUNT}
                        lineDistance={LINE_DISTANCE}
                        bendRadius={5.0}
                        bendStrength={-0.5}
                        interactive={false}
                        parallax={false}
                        animationSpeed={0.4}
                        paused={!isHeroVisible}
                    />
                </Suspense>
            </div>

            <FinalHero />
            <ImageContainer />
        </section>
    );
};

export default memo(HeroCombined);
