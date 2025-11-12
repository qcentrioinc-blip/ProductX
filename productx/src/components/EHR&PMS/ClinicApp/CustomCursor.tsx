import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    // ✅ Attach to window
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full border-2 border-green-600 transition-all duration-150 ease-out"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: "60px",
        height: "60px",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(22,109,72,0.15)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="absolute inset-0 rounded-full border border-green-400 opacity-50 animate-ping" />
    </div>
  );
};

export default CustomCursor;
