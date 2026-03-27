"use client";
import { useEffect, useRef } from 'react';

// SVG-based OS-themed decorative icons rendered on a canvas in the margins
export default function SideDecorations() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let time = 0;
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Decorative elements positioned in the margins (left < 12% or right > 88%)
    const decorations = [
      // Left side
      { side: 'left', yBase: 200, type: 'cpu', speed: 0.4, parallax: 0.15 },
      { side: 'left', yBase: 600, type: 'signal', speed: 0.3, parallax: 0.2 },
      { side: 'left', yBase: 1100, type: 'gear', speed: 0.5, parallax: 0.12 },
      { side: 'left', yBase: 1600, type: 'node', speed: 0.35, parallax: 0.18 },
      { side: 'left', yBase: 2200, type: 'circuit', speed: 0.45, parallax: 0.14 },
      { side: 'left', yBase: 2800, type: 'cpu', speed: 0.3, parallax: 0.22 },
      { side: 'left', yBase: 3400, type: 'signal', speed: 0.5, parallax: 0.16 },
      { side: 'left', yBase: 4000, type: 'gear', speed: 0.4, parallax: 0.2 },
      { side: 'left', yBase: 4600, type: 'node', speed: 0.35, parallax: 0.15 },
      { side: 'left', yBase: 5200, type: 'circuit', speed: 0.45, parallax: 0.18 },
      // Right side
      { side: 'right', yBase: 400, type: 'gear', speed: 0.35, parallax: 0.18 },
      { side: 'right', yBase: 900, type: 'node', speed: 0.5, parallax: 0.14 },
      { side: 'right', yBase: 1400, type: 'cpu', speed: 0.4, parallax: 0.2 },
      { side: 'right', yBase: 1900, type: 'signal', speed: 0.3, parallax: 0.16 },
      { side: 'right', yBase: 2500, type: 'circuit', speed: 0.45, parallax: 0.12 },
      { side: 'right', yBase: 3100, type: 'gear', speed: 0.5, parallax: 0.22 },
      { side: 'right', yBase: 3700, type: 'node', speed: 0.35, parallax: 0.15 },
      { side: 'right', yBase: 4300, type: 'cpu', speed: 0.4, parallax: 0.18 },
      { side: 'right', yBase: 4900, type: 'signal', speed: 0.3, parallax: 0.2 },
      { side: 'right', yBase: 5500, type: 'circuit', speed: 0.45, parallax: 0.16 },
    ];

    // Draw a CPU/chip icon
    const drawCPU = (x, y, size, opacity, rot) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
      ctx.lineWidth = 1;

      // Main chip body
      const s = size * 0.4;
      ctx.strokeRect(-s, -s, s * 2, s * 2);

      // Inner square
      const inner = s * 0.6;
      ctx.strokeRect(-inner, -inner, inner * 2, inner * 2);

      // Pins on each side
      const pins = 3;
      for (let i = 0; i < pins; i++) {
        const offset = -s + (s * 2 / (pins + 1)) * (i + 1);
        // Top pins
        ctx.beginPath(); ctx.moveTo(offset, -s); ctx.lineTo(offset, -s - 6); ctx.stroke();
        // Bottom pins
        ctx.beginPath(); ctx.moveTo(offset, s); ctx.lineTo(offset, s + 6); ctx.stroke();
        // Left pins
        ctx.beginPath(); ctx.moveTo(-s, offset); ctx.lineTo(-s - 6, offset); ctx.stroke();
        // Right pins
        ctx.beginPath(); ctx.moveTo(s, offset); ctx.lineTo(s + 6, offset); ctx.stroke();
      }
      ctx.restore();
    };

    // Draw a signal wave icon
    const drawSignal = (x, y, size, opacity, phase) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = `rgba(99, 220, 200, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      const waveW = size * 0.8;
      for (let i = -waveW; i <= waveW; i += 2) {
        const waveY = Math.sin((i / waveW) * Math.PI * 2 + phase) * size * 0.3;
        if (i === -waveW) ctx.moveTo(i, waveY);
        else ctx.lineTo(i, waveY);
      }
      ctx.stroke();

      // Antenna dot
      ctx.beginPath();
      ctx.arc(0, -size * 0.5, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 220, 200, ${opacity * 0.8})`;
      ctx.fill();

      // Signal arcs
      for (let a = 1; a <= 3; a++) {
        ctx.beginPath();
        ctx.arc(0, -size * 0.5, a * 5, -Math.PI * 0.7, -Math.PI * 0.3);
        ctx.strokeStyle = `rgba(99, 220, 200, ${opacity * (0.5 / a)})`;
        ctx.stroke();
      }
      ctx.restore();
    };

    // Draw a gear icon
    const drawGear = (x, y, size, opacity, rot) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.strokeStyle = `rgba(180, 140, 255, ${opacity})`;
      ctx.lineWidth = 1;

      const outerR = size * 0.4;
      const innerR = size * 0.25;
      const teeth = 8;

      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const angle1 = (Math.PI * 2 / teeth) * i;
        const angle2 = angle1 + Math.PI * 2 / teeth * 0.3;
        const angle3 = angle1 + Math.PI * 2 / teeth * 0.5;
        const angle4 = angle1 + Math.PI * 2 / teeth * 0.8;

        ctx.lineTo(Math.cos(angle1) * innerR, Math.sin(angle1) * innerR);
        ctx.lineTo(Math.cos(angle2) * outerR, Math.sin(angle2) * outerR);
        ctx.lineTo(Math.cos(angle3) * outerR, Math.sin(angle3) * outerR);
        ctx.lineTo(Math.cos(angle4) * innerR, Math.sin(angle4) * innerR);
      }
      ctx.closePath();
      ctx.stroke();

      // Center hole
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    // Draw a network node cluster
    const drawNode = (x, y, size, opacity, phase) => {
      ctx.save();
      ctx.translate(x, y);

      const nodePositions = [
        { nx: 0, ny: 0 },
        { nx: -size * 0.35, ny: -size * 0.25 },
        { nx: size * 0.3, ny: -size * 0.3 },
        { nx: -size * 0.2, ny: size * 0.35 },
        { nx: size * 0.35, ny: size * 0.2 },
      ];

      // Draw connections
      ctx.strokeStyle = `rgba(129, 140, 248, ${opacity * 0.5})`;
      ctx.lineWidth = 0.5;
      for (let i = 1; i < nodePositions.length; i++) {
        ctx.beginPath();
        ctx.moveTo(nodePositions[0].nx, nodePositions[0].ny);
        ctx.lineTo(nodePositions[i].nx, nodePositions[i].ny);
        ctx.stroke();
      }

      // Draw nodes
      nodePositions.forEach((n, i) => {
        const pulse = 1 + Math.sin(phase + i * 1.5) * 0.3;
        const r = (i === 0 ? 3 : 2) * pulse;
        ctx.beginPath();
        ctx.arc(n.nx, n.ny, r, 0, Math.PI * 2);
        ctx.fillStyle = i === 0
          ? `rgba(129, 140, 248, ${opacity})`
          : `rgba(99, 180, 200, ${opacity * 0.7})`;
        ctx.fill();
      });
      ctx.restore();
    };

    // Draw a circuit trace
    const drawCircuit = (x, y, size, opacity, phase) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
      ctx.lineWidth = 1;

      // Vertical trace with branches
      const h = size * 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -h / 2);
      ctx.lineTo(0, h / 2);
      ctx.stroke();

      // Branches
      const branches = [
        { y: -h * 0.3, dir: -1, len: size * 0.3 },
        { y: -h * 0.1, dir: 1, len: size * 0.25 },
        { y: h * 0.15, dir: -1, len: size * 0.2 },
        { y: h * 0.35, dir: 1, len: size * 0.35 },
      ];
      branches.forEach((b) => {
        ctx.beginPath();
        ctx.moveTo(0, b.y);
        ctx.lineTo(b.dir * b.len, b.y);
        ctx.stroke();

        // Endpoint dot
        const pulse = 0.5 + Math.sin(phase + b.y) * 0.5;
        ctx.beginPath();
        ctx.arc(b.dir * b.len, b.y, 2 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${opacity * pulse})`;
        ctx.fill();
      });

      // Junction dots on main trace
      ctx.fillStyle = `rgba(99, 220, 200, ${opacity * 0.6})`;
      [-h * 0.3, 0, h * 0.3].forEach((jy) => {
        ctx.beginPath();
        ctx.arc(0, jy, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const drawFns = { cpu: drawCPU, signal: drawSignal, gear: drawGear, node: drawNode, circuit: drawCircuit };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const marginX = canvas.width * 0.05;
      const rightX = canvas.width - marginX;

      decorations.forEach((dec) => {
        // Parallax scroll effect
        const baseY = dec.yBase - scrollY * (1 - dec.parallax);
        const screenY = baseY % (canvas.height + 400) - 200;

        // Only draw if roughly visible
        if (screenY < -100 || screenY > canvas.height + 100) return;

        const x = dec.side === 'left' ? marginX : rightX;
        const floatY = screenY + Math.sin(time * dec.speed) * 12;

        // Fade in/out near edges
        const edgeFade = Math.min(
          Math.max(0, (screenY + 50) / 100),
          Math.max(0, (canvas.height - screenY + 50) / 100),
          1
        );
        const pulse = 0.08 + Math.sin(time * dec.speed * 0.7) * 0.03;
        const opacity = pulse * edgeFade;
        const size = 30;

        const drawFn = drawFns[dec.type];
        if (drawFn) {
          if (dec.type === 'cpu' || dec.type === 'gear') {
            drawFn(x, floatY, size, opacity, time * dec.speed * 0.5);
          } else {
            drawFn(x, floatY, size, opacity, time * dec.speed * 2);
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[2] pointer-events-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
}
