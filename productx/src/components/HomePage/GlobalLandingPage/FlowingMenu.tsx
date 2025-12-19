import React, { useMemo, useRef } from "react";
import { gsap } from "gsap";

const FlowingMenu: React.FC = () => {
  const items = [
    { link: "#", text: "Mojave", image: "https://picsum.photos/600/400?random=1" },
    { link: "#", text: "Mojave", image: "https://picsum.photos/600/400?random=1" },
    // { link: "#", text: "Sonoma", image: "https://picsum.photos/600/400?random=2" },
    // { link: "#", text: "Monterey", image: "https://picsum.photos/600/400?random=3" },
    // { link: "#", text: "Sequoia", image: "https://picsum.photos/600/400?random=4" },
  ];

  return (
    <div className="relative w-full h-[250px] bg-black overflow-hidden">
      <nav className="flex flex-col h-full">
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </nav>
    </div>
  );
};

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null); // Added for text visibility control

  const animationDefaults: gsap.TweenVars = {
    duration: 0.3,
    ease: "expo.out",
  };

  /* ---------------- EDGE DETECTION ---------------- */
  const dist = (x: number, y: number, x2: number, y2: number) =>
    (x - x2) ** 2 + (y - y2) ** 2;

  const closestEdge = (
    mx: number,
    my: number,
    w: number,
    h: number
  ): "top" | "bottom" =>
    dist(mx, my, w / 2, 0) < dist(mx, my, w / 2, h) ? "top" : "bottom";

  /* ---------------- MARQUEE CONTROL ---------------- */
  const startScroll = () => {
    gsap.to(marqueeInnerRef.current, {
      x: "-50%",
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  };

  const stopScroll = () => {
    gsap.killTweensOf(marqueeInnerRef.current);
    gsap.set(marqueeInnerRef.current, { x: "0%" });
  };

  /* ---------------- EVENTS ---------------- */
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    const r = itemRef.current.getBoundingClientRect();
    const edge = closestEdge(
      e.clientX - r.left,
      e.clientY - r.top,
      r.width,
      r.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
        autoAlpha: 1,
      })
      .set(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
        autoAlpha: 1,
        x: "0%",
      })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0)
      .to(linkRef.current, { opacity: 0 }, 0) // Hides static text
      .call(startScroll);
  };

  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;

    const r = itemRef.current.getBoundingClientRect();
    const edge = closestEdge(
      e.clientX - r.left,
      e.clientY - r.top,
      r.width,
      r.height
    );

    stopScroll();

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, {
        y: edge === "top" ? "-101%" : "101%",
      })
      .to(
        marqueeInnerRef.current,
        {
          y: edge === "top" ? "101%" : "-101%",
          autoAlpha: 0,
        },
        0
      )
      .to(linkRef.current, { opacity: 1 }, 0); // Shows static text
  };

  /* ---------------- CONTENT ---------------- */
  const marqueeContent = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => (
        <React.Fragment key={i}>
          <span className="uppercase text-[4vh] font-normal px-[1vw] pt-[1vh] text-black whitespace-nowrap">
            {text}
          </span>
          <div
            className="w-[200px] h-[7vh] my-[2em] mx-[2vw] rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </React.Fragment>
      )),
    [text, image]
  );

  return (
    <div
      ref={itemRef}
      className="relative flex-1 overflow-hidden text-center border-t border-white/20"
    >
      {/* STATIC TEXT (DEFAULT VIEW) */}
      <a
        ref={linkRef}
        href={link}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="relative z-10 flex h-full items-center justify-center uppercase font-semibold text-white text-[4vh] transition-opacity"
      >
        {text}
      </a>

      {/* HOVER MARQUEE */}
      <div
        ref={marqueeRef}
        className="pointer-events-none absolute inset-0 bg-white translate-y-[101%] opacity-0"
      >
        <div
          ref={marqueeInnerRef}
          className="flex w-[200%] h-full items-center opacity-0"
        >
          {marqueeContent}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;