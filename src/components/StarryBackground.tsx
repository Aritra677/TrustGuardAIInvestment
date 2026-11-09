'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  originalY: number;
  waveOffset: number;
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracker for the interactive wave effect
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    // Color palette: subtle warm yellow and crisp white
    const colors = [
      'rgba(255, 255, 255, ',
      'rgba(254, 240, 138, ', // soft pale yellow
      'rgba(250, 204, 21, ',  // warm gold/yellow
      'rgba(240, 249, 255, ', // gentle ice white
    ];

    const starCount = Math.floor((width * height) / 10000); // responsive count
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originalY: Math.random() * height,
        size: Math.random() * 1.6 + 0.6, // tiny stars
        speed: Math.random() * 0.45 + 0.15, // left-to-right drift
        opacity: Math.random() * 0.7 + 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        waveOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // 1. Left to right transition (drifts horizontally)
        star.x += star.speed;
        if (star.x > width + 5) {
          star.x = -5;
          star.y = Math.random() * height;
          star.originalY = star.y;
        }

        // 2. Natural subtle vertical wave
        const naturalWave = Math.sin(time + star.waveOffset) * 2;

        // 3. Mouse hover wave effect (displacement when cursor passes over)
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let mouseWaveY = 0;
        let mouseWaveX = 0;
        let scale = 1;

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius);
          // Ripple / wave effect
          const angle = Math.atan2(dy, dx);
          const wave = Math.sin(dist * 0.08 - time * 4) * 16 * force;
          mouseWaveX = Math.cos(angle) * wave;
          mouseWaveY = Math.sin(angle) * wave;
          scale = 1 + force * 0.8;
        }

        const currentY = star.originalY + naturalWave + mouseWaveY;
        const currentX = star.x + mouseWaveX;

        // Twinkle effect
        const twinkle = Math.sin(time * 2 + star.waveOffset) * 0.2;
        const currentOpacity = Math.max(0.1, Math.min(1, star.opacity + twinkle));

        ctx.beginPath();
        ctx.arc(currentX, currentY, star.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${currentOpacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ display: 'block' }}
    />
  );
}
