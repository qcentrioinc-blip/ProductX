import { useEffect, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";

const RotatingGlobe = () => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const w = containerRef.current.offsetWidth;

                // ✅ Cap max size — never bigger than 500px
                // ✅ On mobile use 85% of container width
                const size = Math.min(w * 0.90, 700);
                setDimensions({ width: size, height: size });
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = 6;
            controls.enableZoom = true;
            controls.enablePan = false;

            // ✅ Higher altitude = globe appears smaller/further away
            globeRef.current.pointOfView({ altitude: 2.0 });
        }
    }, []);

    return (
        // ✅ Constrain the container itself — globe can't grow beyond this
        <div
            ref={containerRef}
            className="
                w-full max-w-7xl mx-auto
                flex items-center justify-center
                bg-white
            "
        >
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(255,255,255,1)"
                showAtmosphere={true}
                atmosphereColor="#2B68C3"
                atmosphereAltitude={0.15}
                showGraticules={true}
                width={dimensions.width}
                height={dimensions.height}
            />
        </div>
    );
};

export default RotatingGlobe;
