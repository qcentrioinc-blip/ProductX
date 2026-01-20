import { motion } from "framer-motion";
// import  { useEffect, useRef} from 'react';
// import { EffectComposer, RenderPass, EffectPass, BloomEffect, ChromaticAberrationEffect } from 'postprocessing';
// import * as THREE from 'three';
import {  H3, P } from "../../../styles/Typography";

const features = [
  {
    title: "Engineering Expertise",
    description: "Built by cloud engineering veterans.",
    image: "/AIProduct/FeatureAI.png",
    points: [
      "Decades of AWS, Azure, and Google Cloud experience. ",
      "Advanced optimization beyond standard FinOps tools. ",

      "Crafted by seasoned multi-cloud platform professionals.",
      "Understands complex configurations and commercial cloud terms. ",
    ],
  },
  {
    title: "Guaranteed Savings",
    description: " Pay only for performance results.",
    image: "/AIProduct/Saving.png",
    points: [
      "Rapid ROI as early as the first month. ",
      "Unique pay-for-performance model ensures shared success. ",

      "Customers keep 100% of the assured savings. ",
      "We charge a percentage of realized savings. ",
    ],
  },
  {
    title: "Continuous Optimization",
    description: " Retain savings long-term with AI.",
    image: "/AIProduct/ContinousOpti.png",
    points: [
      "Keep 80–90% of savings over time. ",
      "AI-driven measures enable continuous efficiency gains. ",

      "Full savings from enhancements over three years. ",
      "Maximized savings retention with an 8x ROI. ",
    ],
  },
  {
    title: " Secure & Compliant",
    description: "Zero data access, full customer control",
    image: "/AIProduct/Secure.png",
    points: [
      "Never access customer files, databases, or apps.",
      "Read-only by design with Azure RBAC roles. ",
      "Encrypted data at rest and in transit. ",
      "Onboarding and permissions managed by you. ",
    ],
  },
];

// const vert = `
// varying vec2 vUv;
// void main(){
//   vUv = uv;
//   gl_Position = vec4(position.xy, 0.0, 1.0);
// }
// `;

// const frag = `
// precision highp float;
// uniform vec3 iResolution;
// uniform float iTime;
// uniform vec2 uSkew;
// uniform float uTilt;
// uniform float uYaw;
// uniform float uLineThickness;
// uniform vec3 uLinesColor;
// uniform vec3 uScanColor;
// uniform float uGridScale;
// uniform float uLineStyle;
// uniform float uLineJitter;
// uniform float uScanOpacity;
// uniform float uScanDirection;
// uniform float uNoise;
// uniform float uBloomOpacity;
// uniform float uScanGlow;
// uniform float uScanSoftness;
// uniform float uPhaseTaper;
// uniform float uScanDuration;
// uniform float uScanDelay;
// varying vec2 vUv;

// uniform float uScanStarts[8];
// uniform float uScanCount;

// const int MAX_SCANS = 8;

// float smoother01(float a, float b, float x){
//   float t = clamp((x - a) / max(1e-5, (b - a)), 0.0, 1.0);
//   return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
// }

// void mainImage(out vec4 fragColor, in vec2 fragCoord)
// {
//     vec2 p = (2.0 * fragCoord - iResolution.xy) / iResolution.y;

//     vec3 ro = vec3(0.0);
//     vec3 rd = normalize(vec3(p, 2.0));

//     float cR = cos(uTilt), sR = sin(uTilt);
//     rd.xy = mat2(cR, -sR, sR, cR) * rd.xy;

//     float cY = cos(uYaw), sY = sin(uYaw);
//     rd.xz = mat2(cY, -sY, sY, cY) * rd.xz;

//     vec2 skew = clamp(uSkew, vec2(-0.7), vec2(0.7));
//     rd.xy += skew * rd.z;

//     vec3 color = vec3(0.0);
//     float minT = 1e20;
//     float gridScale = max(1e-5, uGridScale);
//     float fadeStrength = 2.0;
//     vec2 gridUV = vec2(0.0);

//     float hitIsY = 1.0;
//     for (int i = 0; i < 4; i++)
//     {
//         float isY = float(i < 2);
//         float pos = mix(-0.2, 0.2, float(i)) * isY + mix(-0.5, 0.5, float(i - 2)) * (1.0 - isY);
//         float num = pos - (isY * ro.y + (1.0 - isY) * ro.x);
//         float den = isY * rd.y + (1.0 - isY) * rd.x;
//         float t = num / den;
//         vec3 h = ro + rd * t;

//         float depthBoost = smoothstep(0.0, 3.0, h.z);
//         h.xy += skew * 0.15 * depthBoost;

//         bool use = t > 0.0 && t < minT;
//         gridUV = use ? mix(h.zy, h.xz, isY) / gridScale : gridUV;
//         minT = use ? t : minT;
//         hitIsY = use ? isY : hitIsY;
//     }

//     vec3 hit = ro + rd * minT;
//     float dist = length(hit - ro);

//     float jitterAmt = clamp(uLineJitter, 0.0, 1.0);
//     if (jitterAmt > 0.0) {
//         vec2 j = vec2(
//             sin(gridUV.y * 2.7 + iTime * 1.8),
//             cos(gridUV.x * 2.3 - iTime * 1.6)
//         ) * (0.15 * jitterAmt);
//         gridUV += j;
//     }
//     float fx = fract(gridUV.x);
//     float fy = fract(gridUV.y);
//     float ax = min(fx, 1.0 - fx);
//     float ay = min(fy, 1.0 - fy);
//     float wx = fwidth(gridUV.x);
//     float wy = fwidth(gridUV.y);
//     float halfPx = max(0.0, uLineThickness) * 0.5;

//     float tx = halfPx * wx;
//     float ty = halfPx * wy;

//     float aax = wx;
//     float aay = wy;

//     float lineX = 1.0 - smoothstep(tx, tx + aax, ax);
//     float lineY = 1.0 - smoothstep(ty, ty + aay, ay);

//     float primaryMask = max(lineX, lineY);

//     vec2 gridUV2 = (hitIsY > 0.5 ? hit.xz : hit.zy) / gridScale;
//     if (jitterAmt > 0.0) {
//         vec2 j2 = vec2(
//             cos(gridUV2.y * 2.1 - iTime * 1.4),
//             sin(gridUV2.x * 2.5 + iTime * 1.7)
//         ) * (0.15 * jitterAmt);
//         gridUV2 += j2;
//     }
//     float fx2 = fract(gridUV2.x);
//     float fy2 = fract(gridUV2.y);
//     float ax2 = min(fx2, 1.0 - fx2);
//     float ay2 = min(fy2, 1.0 - fy2);
//     float wx2 = fwidth(gridUV2.x);
//     float wy2 = fwidth(gridUV2.y);
//     float tx2 = halfPx * wx2;
//     float ty2 = halfPx * wy2;
//     float aax2 = wx2;
//     float aay2 = wy2;
//     float lineX2 = 1.0 - smoothstep(tx2, tx2 + aax2, ax2);
//     float lineY2 = 1.0 - smoothstep(ty2, ty2 + aay2, ay2);

//     float altMask = max(lineX2, lineY2);

//     float edgeDistX = min(abs(hit.x - (-0.5)), abs(hit.x - 0.5));
//     float edgeDistY = min(abs(hit.y - (-0.2)), abs(hit.y - 0.2));
//     float edgeDist = mix(edgeDistY, edgeDistX, hitIsY);
//     float edgeGate = 1.0 - smoothstep(gridScale * 0.5, gridScale * 2.0, edgeDist);
//     altMask *= edgeGate;

//     float lineMask = max(primaryMask, altMask);

//     float fade = exp(-dist * fadeStrength);

//     float dur = max(0.05, uScanDuration);
//     float del = max(0.0, uScanDelay);
//     float scanZMax = 2.0;
//     float widthScale = max(0.1, uScanGlow);
//     float sigma = max(0.001, 0.18 * widthScale * uScanSoftness);
//     float sigmaA = sigma * 2.0;

//     float combinedPulse = 0.0;
//     float combinedAura = 0.0;

//     float cycle = dur + del;
//     float tCycle = mod(iTime, cycle);
//     float scanPhase = clamp((tCycle - del) / dur, 0.0, 1.0);
//     float phase = scanPhase;
//     if (uScanDirection > 0.5 && uScanDirection < 1.5) {
//         phase = 1.0 - phase;
//     } else if (uScanDirection > 1.5) {
//         float t2 = mod(max(0.0, iTime - del), 2.0 * dur);
//         phase = (t2 < dur) ? (t2 / dur) : (1.0 - (t2 - dur) / dur);
//     }
//     float scanZ = phase * scanZMax;
//     float dz = abs(hit.z - scanZ);
//     float lineBand = exp(-0.5 * (dz * dz) / (sigma * sigma));
//     float taper = clamp(uPhaseTaper, 0.0, 0.49);
//     float headW = taper;
//     float tailW = taper;
//     float headFade = smoother01(0.0, headW, phase);
//     float tailFade = 1.0 - smoother01(1.0 - tailW, 1.0, phase);
//     float phaseWindow = headFade * tailFade;
//     float pulseBase = lineBand * phaseWindow;
//     combinedPulse += pulseBase * clamp(uScanOpacity, 0.0, 1.0);
//     float auraBand = exp(-0.5 * (dz * dz) / (sigmaA * sigmaA));
//     combinedAura += (auraBand * 0.25) * phaseWindow * clamp(uScanOpacity, 0.0, 1.0);

//     float lineVis = lineMask;
//     vec3 gridCol = uLinesColor * lineVis * fade;
//     vec3 scanCol = uScanColor * combinedPulse;
//     vec3 scanAura = uScanColor * combinedAura;

//     color = gridCol + scanCol + scanAura;

//     float n = fract(sin(dot(gl_FragCoord.xy + vec2(iTime * 123.4), vec2(12.9898,78.233))) * 43758.5453123);
//     color += (n - 0.5) * uNoise;
//     color = clamp(color, 0.0, 1.0);
//     float alpha = clamp(max(lineVis, combinedPulse), 0.0, 1.0);
//     float gx = 1.0 - smoothstep(tx * 2.0, tx * 2.0 + aax * 2.0, ax);
//     float gy = 1.0 - smoothstep(ty * 2.0, ty * 2.0 + aay * 2.0, ay);
//     float halo = max(gx, gy) * fade;
//     alpha = max(alpha, halo * clamp(uBloomOpacity, 0.0, 1.0));
//     fragColor = vec4(color, alpha);
// }

// void main(){
//     vec4 c;
//     mainImage(c, vUv * iResolution.xy);
//     gl_FragColor = c;
// }
// `;

// const GridScanBg = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const materialRef = useRef<THREE.ShaderMaterial | null>(null);
//   const composerRef = useRef<EffectComposer | null>(null);
//   const rafRef = useRef<number | null>(null);

//   const lookTarget = useRef(new THREE.Vector2(0, 0));
//   const lookCurrent = useRef(new THREE.Vector2(0, 0));
//   // const lookVel = useRef(new THREE.Vector2(0, 0));

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     rendererRef.current = renderer;
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     renderer.autoClear = false;
//     renderer.setClearColor(0x000000, 0);
//     container.appendChild(renderer.domElement);

//     const srgbColor = (hex: string) => {
//       const c = new THREE.Color(hex);
//       return c.convertSRGBToLinear();
//     };

//     const uniforms = {
//       iResolution: {
//         value: new THREE.Vector3(container.clientWidth, container.clientHeight, renderer.getPixelRatio())
//       },
//       iTime: { value: 0 },
//       uSkew: { value: new THREE.Vector2(0, 0) },
//       uTilt: { value: 0 },
//       uYaw: { value: 0 },
//       uLineThickness: { value: 1 },
//       uLinesColor: { value: srgbColor('#6495ED') },
//       uScanColor: { value: srgbColor('#87CEFA') },
//       uGridScale: { value: 0.1 },
//       uLineStyle: { value: 0 },
//       uLineJitter: { value: 0.1 },
//       uScanOpacity: { value: 0.1 },
//       uNoise: { value: 0.01 },
//       uBloomOpacity: { value: 0.2 },
//       uScanGlow: { value: 0.5 },
//       uScanSoftness: { value: 2 },
//       uPhaseTaper: { value: 0.9 },
//       uScanDuration: { value: 2.0 },
//       uScanDelay: { value: 2.0 },
//       uScanDirection: { value: 2 },
//       uScanStarts: { value: new Array(8).fill(0) },
//       uScanCount: { value: 0 }
//     };

//     const material = new THREE.ShaderMaterial({
//       uniforms,
//       vertexShader: vert,
//       fragmentShader: frag,
//       transparent: true,
//       depthWrite: false,
//       depthTest: false
//     });
//     materialRef.current = material;

//     const scene = new THREE.Scene();
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
//     const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
//     scene.add(quad);

//     const composer = new EffectComposer(renderer);
//     composerRef.current = composer;
//     const renderPass = new RenderPass(scene, camera);
//     composer.addPass(renderPass);

//     const bloom = new BloomEffect({
//       intensity: 1.0,
//       luminanceThreshold: 0,
//       luminanceSmoothing: 0
//     });
//     bloom.blendMode.opacity.value = 0.6;

//     const chroma = new ChromaticAberrationEffect({
//       offset: new THREE.Vector2(0.002, 0.002),
//       radialModulation: true,
//       modulationOffset: 0.0
//     });

//     const effectPass = new EffectPass(camera, bloom, chroma);
//     effectPass.renderToScreen = true;
//     composer.addPass(effectPass);

//     const onResize = () => {
//       renderer.setSize(container.clientWidth, container.clientHeight);
//       material.uniforms.iResolution.value.set(container.clientWidth, container.clientHeight, renderer.getPixelRatio());
//       composer.setSize(container.clientWidth, container.clientHeight);
//     };
//     window.addEventListener('resize', onResize);

//     const onMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect();
//       const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
//       const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
//       lookTarget.current.set(nx, ny);
//     };
//     container.addEventListener('mousemove', onMove);

//     let last = performance.now();
//     const tick = () => {
//       const now = performance.now();
//       const dt = Math.max(0, Math.min(0.1, (now - last) / 1000));
//       last = now;

//       lookCurrent.current.lerp(lookTarget.current, 1 - Math.exp(-10 * dt));

//       const skewScale = 0.06;
//       const skew = new THREE.Vector2(lookCurrent.current.x * skewScale, -lookCurrent.current.y * skewScale);
//       material.uniforms.uSkew.value.set(skew.x, skew.y);

//       material.uniforms.iTime.value = now / 1000;
//       renderer.clear(true, true, true);
//       composer.render(dt);
//       rafRef.current = requestAnimationFrame(tick);
//     };
//     rafRef.current = requestAnimationFrame(tick);

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       window.removeEventListener('resize', onResize);
//       container.removeEventListener('mousemove', onMove);
//       material.dispose();
//       (quad.geometry as THREE.BufferGeometry).dispose();
//       composer.dispose();
//       renderer.dispose();
//       container.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 w-full h-full"
//       style={{ pointerEvents: 'none' }}
//     />
//   );
// };


export default function FeatureCards() {
  return (
    <section className="w-full bg-neutral-900 py-16 relative overflow-hidden">

      {/* <GridScanBg />   */}
      {/* Content */}
   <div
  className="
    xl:ml-32
    max-w-8xl
    px-6
    xl:px-0
    grid
    grid-cols-1
    md:grid-cols-2
    gap-y-16
    gap-x-20
    xl:py-20
    relative
    z-10
  "
>

        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div className="xl:flex-row flex flex-col gap-10">
              {/* Image */}
             <img
  src={item.image}
  alt={item.title}
  className="
    flex-shrink-0
    rounded-sm
    object-contain

    md:max-h-16
    md:max-w-16

    xl:max-h-[100px]
    xl:max-w-[100px]
  "
/>


              {/* Title and Description */}
              <div className="space-y-2">
                <H3 className="inline-block border-b-4 border-[#5551FF]   font-semibold text-white">
                  {item.title}
                </H3>
                <P className="mt-2 text-[28px] font-quicksand text-sm text-[#F5F5F5]">
                  {item.description}
                </P>
              </div>
            </div>

            {/* Bullet Points Below */}
            <ul className="space-y-2 text-sm items-center text-[#F5F5F5]">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center font-quicksand lg:text-lg">
                  <span className="h-1.5 w-1.5 mx-2 rounded-full bg-[#F5F5F5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}