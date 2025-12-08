"use client";
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      // Set actual canvas size to match display size for crisp pixels
      const { width, height } = canvas.getBoundingClientRect();
      // Multiply by devicePixelRatio for sharp rendering on retina screens
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      initStars(width, height);
    };

    const initStars = (width: number, height: number) => {
      // Denser star count to match the original CSS shadow density
      const starCount = width < 768 ? 200 : 400; 
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() < 0.5 ? 1 : 0.5, // Mostly 0.5px or 1px (very fine)
          speed: Math.random() * 0.2 + 0.05, // Very slow movement
          opacity: Math.random() * 0.5 + 0.1, // Max opacity 0.6
        });
      }
    };

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        // Rectangles render slightly sharper/faster for tiny 1px stars than circles
        ctx.rect(star.x, star.y, star.size, star.size); 
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default Starfield;