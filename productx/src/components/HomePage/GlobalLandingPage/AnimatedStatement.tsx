import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

/* -------------------- IMAGE TRAIL HELPERS -------------------- */
function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function getMouseDistance(p1: any, p2: any) {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

function getLocalPointerPos(e: MouseEvent, rect: DOMRect) {
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

class ImageItem {
  el: HTMLDivElement;
  rect: DOMRect;

  constructor(el: HTMLDivElement) {
    this.el = el;
    this.rect = el.getBoundingClientRect();
    gsap.set(this.el, { opacity: 0 });
  }
}

/* -------------------- IMAGE TRAIL VARIANT 1 -------------------- */
class ImageTrail {
  container: HTMLDivElement;
  images: ImageItem[];
  mouse = { x: 0, y: 0 };
  lastMouse = { x: 0, y: 0 };
  cached = { x: 0, y: 0 };
  threshold = 80;
  index = 0;
  z = 1;

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.images = [...container.querySelectorAll(".trail-img")].map(
      el => new ImageItem(el as HTMLDivElement)
    );

    container.addEventListener("mousemove", this.onMove);
    requestAnimationFrame(this.render);
  }

  onMove = (e: MouseEvent) => {
    const rect = this.container.getBoundingClientRect();
    this.mouse = getLocalPointerPos(e, rect);
  };

  render = () => {
    const dist = getMouseDistance(this.mouse, this.lastMouse);
    this.cached.x = lerp(this.cached.x, this.mouse.x, 0.1);
    this.cached.y = lerp(this.cached.y, this.mouse.y, 0.1);

    if (dist > this.threshold) {
      this.show();
      this.lastMouse = { ...this.mouse };
    }

    requestAnimationFrame(this.render);
  };

  show() {
    this.z++;
    this.index = (this.index + 1) % this.images.length;
    const img = this.images[this.index];

    gsap.killTweensOf(img.el);

    gsap
      .timeline()
      .fromTo(
        img.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.z,
          x: this.cached.x - img.rect.width / 2,
          y: this.cached.y - img.rect.height / 2
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mouse.x - img.rect.width / 2,
          y: this.mouse.y - img.rect.height / 2
        }
      )
      .to(img.el, {
        duration: 0.4,
        ease: "power3",
        opacity: 0,
        scale: 0.2
      });
  }
}

/* -------------------- MAIN COMPONENT -------------------- */
const AnimatedStatementWithImageTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const text =
    "Qnest Global turns business goals into measurable results with clear strategy, reliable technology, and ongoing support";

  const words = text.split(" ");

  const images = useMemo(
    () => [
      "../AIOptimization/1.webp",
      "../AIOptimization/2.webp",
      "../AIOptimization/3.webp",
      "../AIOptimization/4.webp",
      "../AIOptimization/5.webp",
      "../AIOptimization/6.webp"
    ],
    []
  );

  useEffect(() => {
    if (!containerRef.current) return;
    new ImageTrail(containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[30vh] lg:h-[50vh] xl:h-[70vh] overflow-hidden flex items-center justify-center"
    >
      {/* TEXT */}
      <div className="relative z-10 text-center max-w-8xl mx-10">
        <motion.h2
          className="text-[24px] md:text-[32px] lg:text-[64px] font-semibold text-[#2A2A2A] leading-relaxed font-bricolage"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: i * 0.04
                  }
                }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* IMAGE TRAIL */}
      {images.map((src, i) => (
        <div
          key={i}
          className="trail-img absolute top-0 left-0 w-[190px] aspect-square rounded-xl opacity-0 overflow-hidden pointer-events-none"
        >
          <div
            className="w-[calc(100%+20px)] h-[calc(100%+20px)] bg-cover bg-center absolute -top-[10px] -left-[10px]"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedStatementWithImageTrail;
