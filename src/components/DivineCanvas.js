"use client";
import { useEffect, useRef } from 'react';

export default function TechCanvas({ commandState = 'stable' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

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

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Particles floating upward
    const particles = Array.from({ length: 50 }, (_, i) => ({
      x: (Math.sin(i * 7.13 + 3.7) * 0.5 + 0.5),
      y: (Math.cos(i * 4.91 + 1.3) * 0.5 + 0.5),
      size: 1 + (i % 3) * 0.8,
      speed: 0.3 + (i % 5) * 0.15,
      drift: (Math.sin(i * 2.3) * 0.5),
      opacity: 0.2 + (i % 4) * 0.1,
      color: i % 3 === 0 ? [129, 140, 248] : i % 3 === 1 ? [244, 114, 182] : [251, 146, 60],
    }));

    // Floating code symbols
    const codeSymbols = [
      { char: '</>', x: 0.12, y: 0.2, size: 18, speed: 0.25 },
      { char: '{ }', x: 0.85, y: 0.15, size: 22, speed: 0.18 },
      { char: '=>', x: 0.08, y: 0.65, size: 20, speed: 0.3 },
      { char: '[ ]', x: 0.92, y: 0.55, size: 16, speed: 0.22 },
      { char: '()', x: 0.75, y: 0.8, size: 14, speed: 0.28 },
      { char: '#!', x: 0.2, y: 0.85, size: 16, speed: 0.2 },
      { char: '::', x: 0.55, y: 0.1, size: 14, speed: 0.35 },
      { char: '/**/', x: 0.4, y: 0.9, size: 12, speed: 0.15 },
      { char: '&&', x: 0.65, y: 0.35, size: 15, speed: 0.25 },
      { char: '||', x: 0.3, y: 0.45, size: 13, speed: 0.32 },
    ];

    // Draw animated dot grid with wave effect
    const drawGrid = () => {
      const spacing = 50;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;

          // Wave displacement
          const wave = Math.sin(time * 1.5 + i * 0.4 + j * 0.3) * 3;
          const x = baseX + wave;
          const y = baseY + Math.cos(time * 1.2 + j * 0.5 + i * 0.2) * 3;

          // Mouse proximity glow
          const distToMouse = Math.sqrt(Math.pow(x - mx, 2) + Math.pow(y - my, 2));
          const mouseGlow = Math.max(0, 1 - distToMouse / 200);

          // Center radial fade
          const distFromCenter = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const maxDist = Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));
          const fade = 1 - distFromCenter / maxDist;

          const baseOpacity = 0.15 + Math.sin(time * 0.8 + i * 0.3 + j * 0.3) * 0.1;
          const opacity = fade * (baseOpacity + mouseGlow * 0.5);
          const radius = 1 + mouseGlow * 2.5;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          if (mouseGlow > 0.3) {
            ctx.fillStyle = `rgba(165, 180, 252, ${opacity})`;
          } else {
            ctx.fillStyle = `rgba(129, 140, 248, ${opacity})`;
          }
          ctx.fill();

          // Connect nearby dots to mouse with lines
          if (mouseGlow > 0.5) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(129, 140, 248, ${mouseGlow * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Draw floating particles
    const drawParticles = () => {
      particles.forEach((p) => {
        const px = ((p.x + Math.sin(time * p.speed + p.drift) * 0.03) % 1) * canvas.width;
        const rawY = p.y - (time * p.speed * 0.02) % 1;
        const py = ((rawY % 1) + 1) % 1 * canvas.height;
        const pulseOpacity = p.opacity + Math.sin(time * 2 + p.x * 10) * 0.1;

        // Glow
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, p.size * 4);
        gradient.addColorStop(0, `rgba(${p.color.join(',')}, ${pulseOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(px - p.size * 4, py - p.size * 4, p.size * 8, p.size * 8);

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.join(',')}, ${pulseOpacity})`;
        ctx.fill();
      });
    };

    // Draw code symbols with rotation feel
    const drawCodeSymbols = () => {
      codeSymbols.forEach((s, i) => {
        const x = s.x * canvas.width;
        const y = s.y * canvas.height + Math.sin(time * s.speed + i) * 25;
        const opacity = 0.06 + Math.sin(time * 0.6 + i * 1.5) * 0.04;
        const scale = 1 + Math.sin(time * 0.4 + i * 2) * 0.1;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.font = `${s.size}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = i % 2 === 0
          ? `rgba(129, 140, 248, ${opacity})`
          : `rgba(244, 114, 182, ${opacity})`;
        ctx.fillText(s.char, 0, 0);
        ctx.restore();
      });
    };

    // Draw glowing orbs
    const drawOrbs = () => {
      const orbs = [
        { x: 0.15, y: 0.25, r: 280, color: [99, 102, 241], intensity: 0.06 },
        { x: 0.85, y: 0.7, r: 240, color: [244, 114, 182], intensity: 0.05 },
        { x: 0.5, y: 0.5, r: 350, color: [129, 140, 248], intensity: 0.04 },
        { x: 0.7, y: 0.2, r: 180, color: [251, 146, 60], intensity: 0.03 },
      ];

      orbs.forEach((orb, i) => {
        const x = orb.x * canvas.width + Math.sin(time * 0.3 + i * 1.5) * 60;
        const y = orb.y * canvas.height + Math.cos(time * 0.25 + i * 2) * 50;
        const pulsedR = orb.r + Math.sin(time * 0.5 + i) * 30;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulsedR);
        gradient.addColorStop(0, `rgba(${orb.color.join(',')}, ${orb.intensity})`);
        gradient.addColorStop(0.5, `rgba(${orb.color.join(',')}, ${orb.intensity * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    // Connecting neural lines between nearby particles
    const drawNeuralLines = () => {
      for (let i = 0; i < particles.length; i++) {
        const p1x = ((particles[i].x + Math.sin(time * particles[i].speed + particles[i].drift) * 0.03) % 1) * canvas.width;
        const rawY1 = particles[i].y - (time * particles[i].speed * 0.02) % 1;
        const p1y = ((rawY1 % 1) + 1) % 1 * canvas.height;

        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const p2x = ((particles[j].x + Math.sin(time * particles[j].speed + particles[j].drift) * 0.03) % 1) * canvas.width;
          const rawY2 = particles[j].y - (time * particles[j].speed * 0.02) % 1;
          const p2y = ((rawY2 % 1) + 1) % 1 * canvas.height;

          const dist = Math.sqrt(Math.pow(p1x - p2x, 2) + Math.pow(p1y - p2y, 2));
          if (dist < 150) {
            const lineOpacity = (1 - dist / 150) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1x, p1y);
            ctx.lineTo(p2x, p2y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawOrbs();
      drawGrid();
      drawNeuralLines();
      drawParticles();
      drawCodeSymbols();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-70"
      />
    </div>
  );
}
