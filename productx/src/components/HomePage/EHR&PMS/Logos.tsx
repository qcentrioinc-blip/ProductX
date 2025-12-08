import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { H2 } from "../../../styles/Typography"

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [seqHeight, setSeqHeight] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier: number;
      if (isVertical) {
        directionMultiplier = direction === 'up' ? 1 : -1;
      } else {
        directionMultiplier = direction === 'left' ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      
      if (isVertical) {
        const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== `${targetHeight}px`)
            containerRef.current.style.height = `${targetHeight}px`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
          const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    // Resize observer effect
    useEffect(() => {
      const callback = () => updateDimensions();
      
      if (!window.ResizeObserver) {
        const handleResize = () => callback();
        window.addEventListener('resize', handleResize);
        callback();
        return () => window.removeEventListener('resize', handleResize);
      }

      const elements = [containerRef, seqRef];
      const observers = elements.map(ref => {
        if (!ref.current) return null;
        const observer = new ResizeObserver(callback);
        observer.observe(ref.current);
        return observer;
      });

      callback();

      return () => {
        observers.forEach(observer => observer?.disconnect());
      };
    }, [updateDimensions]);

    // Image loader effect
    useEffect(() => {
      const onLoad = () => updateDimensions();
      const images = seqRef.current?.querySelectorAll('img') ?? [];

      if (images.length === 0) {
        onLoad();
        return;
      }

      let remainingImages = images.length;
      const handleImageLoad = () => {
        remainingImages -= 1;
        if (remainingImages === 0) {
          onLoad();
        }
      };

      images.forEach(img => {
        const htmlImg = img as HTMLImageElement;
        if (htmlImg.complete) {
          handleImageLoad();
        } else {
          htmlImg.addEventListener('load', handleImageLoad, { once: true });
          htmlImg.addEventListener('error', handleImageLoad, { once: true });
        }
      });

      return () => {
        images.forEach(img => {
          img.removeEventListener('load', handleImageLoad);
          img.removeEventListener('error', handleImageLoad);
        });
      };
    }, [updateDimensions]);

    // Animation loop effect
    useEffect(() => {
      const track = trackRef.current;
      if (!track) return;

      const seqSize = isVertical ? seqHeight : seqWidth;

      if (seqSize > 0) {
        // const offset = 0; // We'll manage this with requestAnimationFrame
        const transformValue = isVertical
          ? `translate3d(0, ${0}px, 0)`
          : `translate3d(${0}px, 0, 0)`;
        track.style.transform = transformValue;
      }

      let rafId: number | null = null;
      let lastTimestamp: number | null = null;
      let offset = 0;
      let velocity = 0;

      const animate = (timestamp: number) => {
        if (lastTimestamp === null) {
          lastTimestamp = timestamp;
        }

        const deltaTime = Math.max(0, timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;

        const target = isHovered && effectiveHoverSpeed !== undefined ? effectiveHoverSpeed : targetVelocity;

        const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
        velocity += (target - velocity) * easingFactor;

        if (seqSize > 0) {
          offset += velocity * deltaTime;
          // Wrap around
          offset = ((offset % seqSize) + seqSize) % seqSize;

          const transformValue = isVertical
            ? `translate3d(0, ${-offset}px, 0)`
            : `translate3d(${-offset}px, 0, 0)`;
          track.style.transform = transformValue;
        }

        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);

      return () => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
      };
    }, [targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical]);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClassName = useMemo(
      () =>
        [
          'logoloop',
          isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
          fadeOut && 'logoloop--fade',
          scaleOnHover && 'logoloop--scale-hover',
          className
        ]
          .filter(Boolean)
          .join(' '),
      [isVertical, fadeOut, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        if (renderItem) {
          return (
            <li className="logoloop__item" key={key} role="listitem">
              {renderItem(item, key)}
            </li>
          );
        }
        const isNodeItem = 'node' in item;
        const content = isNodeItem ? (
          <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
            {item.node}
          </span>
        ) : (
          <img
            src={item.src}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );
        const itemAriaLabel = isNodeItem
          ? item.ariaLabel ?? item.title
          : item.alt ?? item.title;
        const itemContent = item.href ? (
          <a
            className="logoloop__link"
            href={item.href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );
        return (
          <li className="logoloop__item" key={key} role="listitem">
            {itemContent}
          </li>
        );
      },
      [renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              flexDirection: isVertical ? 'column' : 'row',
              alignItems: 'center',
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
          >
            <li
    className="logoloop__spacer"
    style={{ width: `${gap}px`, flexShrink: 0 }}
  />
            {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem, gap, isVertical]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        overflow: 'hidden',
        position: 'relative',
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div ref={containerRef} className={rootClassName} style={containerStyle} role="region" aria-label={ariaLabel}>
        <div 
          className="logoloop__track"
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            flexDirection: isVertical ? 'column' : 'row',
            willChange: 'transform'
          }}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

// CSS Styles for the LogoLoop component
const logoLoopStyles = `
.logoloop {
  overflow: hidden;
  position: relative;
}

.logoloop--horizontal .logoloop__track {
  display: flex;
  flex-direction: row;
}

.logoloop--vertical .logoloop__track {
  display: flex;
  flex-direction: column;
}

.logoloop__track {
  will-change: transform;
}

.logoloop__list {
  display: flex;
  gap: var(--logoloop-gap, 32px);
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-shrink: 0;
}

.logoloop--horizontal .logoloop__list {
  flex-direction: row;
}

.logoloop--vertical .logoloop__list {
  flex-direction: column;
}

.logoloop__item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--logoloop-logoHeight, 28px);
}

.logoloop__link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}

.logoloop--scale-hover .logoloop__link:hover {
  transform: scale(1.1);
}

.logoloop__node,
.logoloop__item img {
  display: block;
  max-height: 100%;
  width: auto;
}

.logoloop--fade {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
}

.logoloop--vertical.logoloop--fade {
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
}
`;

export const Logos = () => {
  // Create logo items for the LogoLoop component
  const logoLoopItems: LogoItem[] = [1, 2, 3].map((i) => ({
    node: (
      <div
        className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all"
        style={{
          padding: '32px 82px',
          borderRadius: '8px'
        }}
      >
        <span className="text-gray-300 font-semibold text-xl">Logo</span>
      </div>
    ),
    title: `Logo ${i}`,
    ariaLabel: `Company Logo ${i}`
  }));

  return (
    <div className="bg-white py-12 max-w-8xl mx-10 xl:px-10 border-t border-gray-200 relative">
      {/* Add the LogoLoop styles */}
      <style dangerouslySetInnerHTML={{ __html: logoLoopStyles }} />
      
      <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        <H2
          className="text-[#04531A] leading-tight text-center md:text-left"
        >
          Duis aute
        </H2>

        {/* Desktop view - original static layout (hidden below 1440px) */}
        <div className="hidden 2xl:flex flex-col sm:flex-row gap-6 md:gap-16 flex-1 justify-center md:justify-start w-full md:w-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              style={{
                padding: '32px 82px',
                borderRadius: '8px'
              }}
            >
              <span className="text-gray-300 font-semibold text-xl">Logo</span>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet view - LogoLoop animation (hidden above 1440px) */}
        <div className="2xl:hidden w-full" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={logoLoopItems}
            speed={150}
            direction="left"
            logoHeight={120}
            gap={40}
            hoverSpeed={20}
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Partner logos"
            style={{ height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};