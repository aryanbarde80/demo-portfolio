"use client";
import { useEffect, useRef } from 'react';

export default function OrbitalFiller({ variant = 'rings' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);

    const drawRings = (w, h, t) => {
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.38;
      for (let i = 0; i < 5; i++) {
        const r = maxR * (0.3 + i * 0.17);
        const angle = t * (0.3 + i * 0.1) + i * 1.2;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.4, angle, 0, Math.PI * 2);
        const alpha = 0.15 + 0.1 * Math.sin(t + i);
        ctx.strokeStyle = i % 2 === 0
          ? `rgba(129, 140, 248, ${alpha})`
          : `rgba(99, 220, 200, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      // center dot
      const pulseR = 3 + 2 * Math.sin(t * 2);
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129, 140, 248, ${0.4 + 0.2 * Math.sin(t * 2)})`;
      ctx.fill();
      // orbiting particles
      for (let i = 0; i < 6; i++) {
        const orbitR = maxR * (0.3 + (i % 5) * 0.17);
        const a = t * (0.5 + i * 0.15) + i * Math.PI / 3;
        const px = cx + Math.cos(a) * orbitR;
        const py = cy + Math.sin(a) * orbitR * 0.4;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 114, 182, ${0.4 + 0.3 * Math.sin(t + i)})`;
        ctx.fill();
      }
    };

    const drawGrid = (w, h, t) => {
      const spacing = 30;
      const cols = Math.ceil(w / spacing);
      const rows = Math.ceil(h / spacing);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(Math.pow(x - w / 2, 2) + Math.pow(y - h / 2, 2));
          const wave = Math.sin(dist * 0.03 - t * 1.5) * 0.5 + 0.5;
          const size = 1 + wave * 2;
          const alpha = 0.05 + wave * 0.2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`;
          ctx.fill();
        }
      }
      // connecting lines for nearby dots
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(Math.pow(x - w / 2, 2) + Math.pow(y - h / 2, 2));
          const wave = Math.sin(dist * 0.03 - t * 1.5) * 0.5 + 0.5;
          if (wave > 0.6 && i < cols) {
            const nx = (i + 1) * spacing;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, y);
            ctx.strokeStyle = `rgba(99, 220, 200, ${wave * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
          if (wave > 0.6 && j < rows) {
            const ny = (j + 1) * spacing;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, ny);
            ctx.strokeStyle = `rgba(99, 220, 200, ${wave * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawPulse = (w, h, t) => {
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.45;
      for (let i = 0; i < 4; i++) {
        const phase = (t * 0.6 + i * 0.8) % 3.2;
        const r = maxR * (phase / 3.2);
        const alpha = Math.max(0, 0.3 - phase * 0.09);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = i % 2 === 0
          ? `rgba(129, 140, 248, ${alpha})`
          : `rgba(244, 114, 182, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // floating particles
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 / 12) * i + t * 0.2;
        const dist = maxR * (0.2 + 0.3 * Math.sin(t * 0.5 + i));
        const px = cx + Math.cos(angle) * dist;
        const py = cy + Math.sin(angle) * dist;
        const s = 1 + Math.sin(t + i) * 1;
        ctx.beginPath();
        ctx.arc(px, py, s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251, 146, 60, ${0.2 + 0.2 * Math.sin(t * 1.5 + i)})`;
        ctx.fill();
      }
    };

    const drawHelix = (w, h, t) => {
      const cx = w / 2;
      const points = 40;
      const amplitude = Math.min(w, h) * 0.25;
      const vertSpacing = h / (points + 1);
      for (let strand = 0; strand < 2; strand++) {
        ctx.beginPath();
        for (let i = 0; i < points; i++) {
          const y = vertSpacing * (i + 1);
          const phase = t + (i * 0.3) + (strand * Math.PI);
          const x = cx + Math.sin(phase) * amplitude;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = strand === 0
          ? `rgba(129, 140, 248, 0.25)`
          : `rgba(244, 114, 182, 0.25)`;
        ctx.lineWidth = 2;
        ctx.stroke();
        // dots on strand
        for (let i = 0; i < points; i += 3) {
          const y = vertSpacing * (i + 1);
          const phase = t + (i * 0.3) + (strand * Math.PI);
          const x = cx + Math.sin(phase) * amplitude;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = strand === 0
            ? `rgba(129, 140, 248, 0.4)`
            : `rgba(244, 114, 182, 0.4)`;
          ctx.fill();
        }
      }
      // bridges between strands
      for (let i = 0; i < points; i += 4) {
        const y = vertSpacing * (i + 1);
        const x1 = cx + Math.sin(t + i * 0.3) * amplitude;
        const x2 = cx + Math.sin(t + i * 0.3 + Math.PI) * amplitude;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(99, 220, 200, ${0.1 + 0.1 * Math.sin(t + i)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    };

    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);
      time += 0.015;

      switch (variant) {
        case 'rings': drawRings(w, h, time); break;
        case 'grid': drawGrid(w, h, time); break;
        case 'pulse': drawPulse(w, h, time); break;
        case 'helix': drawHelix(w, h, time); break;
        default: drawRings(w, h, time);
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [variant]);

  return (
    <div className="w-full h-full relative" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
