import { useEffect, useRef } from 'react';

export default function LiquidEtherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    let t = 0;
    const render = () => {
      t += 0.015;

      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#59d0ff");
      g.addColorStop(1, "#6b33ff");

      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const blobCount = 12;
      for (let i = 0; i < blobCount; i++) {
        const x = (Math.sin(t + i * 0.7) + 1) * 0.5 * w;
        const y = (Math.cos(t * 1.2 + i * 0.9) + 1) * 0.5 * h;
        const r = 120 + Math.sin(t * 2 + i) * 40;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,0.12)`;
        ctx.filter = "blur(90px)";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = "none";
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
