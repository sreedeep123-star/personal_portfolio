import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const density = Math.floor((canvas.width * canvas.height) / 8500);
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.3 + 0.1,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        alpha: Math.random(),
        alphaSpeed: (Math.random() - 0.5) * 0.004,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        star.alpha += star.alphaSpeed;

        if (star.alpha > 1) { star.alpha = 1; star.alphaSpeed *= -1; }
        if (star.alpha < 0.05) { star.alpha = 0.05; star.alphaSpeed *= -1; }

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        // Mix gold and cyan stars for richer look
        const isGold = star.radius > 0.9;
        if (isGold) {
          ctx.fillStyle = `rgba(212, 165, 90, ${star.alpha * 0.45})`;
        } else {
          ctx.fillStyle = `rgba(120, 210, 230, ${star.alpha * 0.5})`;
        }
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      aria-hidden="true"
    />
  );
}
