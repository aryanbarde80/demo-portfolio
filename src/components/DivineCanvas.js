"use client";
import { useEffect, useRef } from 'react';

export default function TechCanvas({ commandState = 'stable' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Deterministic dot grid
    const drawGrid = () => {
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const distFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const maxDist = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));
          const fade = 1 - distFromCenter / maxDist;
          const pulse = 0.3 + Math.sin(time * 0.5 + i * 0.3 + j * 0.3) * 0.15;

          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(129, 140, 248, ${fade * pulse})`;
          ctx.fill();
        }
      }
    };

    // Floating code bracket shapes
    const brackets = Array.from({ length: 8 }, (_, i) => ({
      x: (Math.sin(i * 5.1 + 2.3) * 0.5 + 0.5) * 100,
      y: (Math.cos(i * 3.7 + 1.1) * 0.5 + 0.5) * 100,
      size: 12 + (i % 4) * 6,
      speed: 0.2 + (i % 3) * 0.15,
      char: ['</', '{ }', '/>', '[ ]', '( )', '# ', '=> ', '::'][i],
      color: i % 2 === 0 ? 'rgba(129, 140, 248,' : 'rgba(244, 114, 182,',
    }));

    // Connecting lines between brackets
    const drawConnections = () => {
      for (let i = 0; i < brackets.length - 1; i++) {
        const a = brackets[i];
        const b = brackets[i + 1];
        const ax = (a.x / 100) * canvas.width;
        const ay = (a.y / 100) * canvas.height + Math.sin(time * a.speed) * 30;
        const bx = (b.x / 100) * canvas.width;
        const by = (b.y / 100) * canvas.height + Math.sin(time * b.speed) * 30;

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = 'rgba(129, 140, 248, 0.04)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    const drawBrackets = () => {
      brackets.forEach((b) => {
        const x = (b.x / 100) * canvas.width;
        const y = (b.y / 100) * canvas.height + Math.sin(time * b.speed) * 30;
        const opacity = 0.06 + Math.sin(time * 0.8 + b.x) * 0.03;

        ctx.font = `${b.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = `${b.color} ${opacity})`;
        ctx.fillText(b.char, x, y);
      });
    };

    // Subtle gradient orbs
    const drawOrbs = () => {
      const orbs = [
        { x: 0.2, y: 0.3, r: 200, color: [99, 102, 241] },
        { x: 0.8, y: 0.7, r: 180, color: [244, 114, 182] },
        { x: 0.5, y: 0.5, r: 250, color: [129, 140, 248] },
      ];

      orbs.forEach((orb, i) => {
        const x = orb.x * canvas.width + Math.sin(time * 0.3 + i) * 40;
        const y = orb.y * canvas.height + Math.cos(time * 0.2 + i) * 30;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.r);
        gradient.addColorStop(0, `rgba(${orb.color.join(',')}, 0.04)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawOrbs();
      drawGrid();
      drawConnections();
      drawBrackets();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
      />
    </div>
  );
}
