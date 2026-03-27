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

    // Neural network nodes
    const neurons = Array.from({ length: 80 }, (_, i) => ({
      baseX: (Math.sin(i * 7.13 + 3.7) * 0.5 + 0.5),
      baseY: (Math.cos(i * 4.91 + 1.3) * 0.5 + 0.5),
      x: (Math.sin(i * 7.13 + 3.7) * 0.5 + 0.5),
      y: (Math.cos(i * 4.91 + 1.3) * 0.5 + 0.5),
      size: 1.5 + (i % 4) * 0.8,
      pulseSpeed: 0.5 + (i % 6) * 0.2,
      pulsePhase: i * 1.3,
      active: false,
      activationTime: 0,
    }));

    // Build synaptic connections
    const connections = [];
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const dx = neurons[i].baseX - neurons[j].baseX;
        const dy = neurons[i].baseY - neurons[j].baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.18) {
          connections.push({
            from: i,
            to: j,
            strength: 1 - dist / 0.18,
            pulseOffset: (i + j) * 0.7,
            pulseSpeed: 0.8 + (i % 3) * 0.4,
          });
        }
      }
    }

    // Signal pulses
    const signals = [];
    let signalTimer = 0;

    const spawnSignal = () => {
      if (connections.length === 0) return;
      const connIdx = Math.floor((Math.sin(signalTimer * 13.7) * 0.5 + 0.5) * connections.length) % connections.length;
      const conn = connections[connIdx];
      const reverse = Math.sin(signalTimer * 7.3) > 0;
      signals.push({
        connection: connIdx,
        progress: 0,
        speed: 0.008 + Math.abs(Math.sin(signalTimer * 3.1)) * 0.012,
        from: reverse ? conn.to : conn.from,
        to: reverse ? conn.from : conn.to,
        color: signalTimer % 3 === 0 ? [129, 140, 248] : signalTimer % 3 === 1 ? [99, 220, 200] : [180, 140, 255],
      });
      signalTimer++;
    };

    // Subtle ambient glow
    const drawAmbientGlow = () => {
      const orbs = [
        { x: 0.2, y: 0.3, r: 350, color: [99, 102, 241], intensity: 0.04 },
        { x: 0.8, y: 0.7, r: 300, color: [99, 180, 200], intensity: 0.03 },
        { x: 0.5, y: 0.5, r: 400, color: [80, 80, 160], intensity: 0.025 },
      ];
      orbs.forEach((orb, i) => {
        const x = orb.x * canvas.width + Math.sin(time * 0.2 + i * 2) * 40;
        const y = orb.y * canvas.height + Math.cos(time * 0.15 + i * 1.5) * 35;
        const pulsedR = orb.r + Math.sin(time * 0.3 + i) * 40;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, pulsedR);
        gradient.addColorStop(0, `rgba(${orb.color.join(',')}, ${orb.intensity})`);
        gradient.addColorStop(0.6, `rgba(${orb.color.join(',')}, ${orb.intensity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    // Subtle grid for OS feel
    const drawGridOverlay = () => {
      ctx.strokeStyle = 'rgba(129, 140, 248, 0.015)';
      ctx.lineWidth = 0.5;
      const spacing = 80;
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw connections (synapses)
    const drawConnections = () => {
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;
      connections.forEach((conn) => {
        const n1 = neurons[conn.from];
        const n2 = neurons[conn.to];
        const x1 = n1.x * canvas.width;
        const y1 = n1.y * canvas.height;
        const x2 = n2.x * canvas.width;
        const y2 = n2.y * canvas.height;

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const distToMouse = Math.sqrt(Math.pow(midX - mx, 2) + Math.pow(midY - my, 2));
        const mouseBoost = Math.max(0, 1 - distToMouse / 250) * 0.15;
        const basePulse = Math.sin(time * conn.pulseSpeed + conn.pulseOffset) * 0.03;
        const opacity = 0.04 + basePulse + mouseBoost;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(129, 140, 248, ${opacity * conn.strength})`;
        ctx.lineWidth = 0.5 + mouseBoost * 3;
        ctx.stroke();
      });
    };

    // Draw neurons (nodes)
    const drawNeurons = () => {
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;
      neurons.forEach((n, i) => {
        n.x = n.baseX + Math.sin(time * 0.3 + i * 1.7) * 0.008;
        n.y = n.baseY + Math.cos(time * 0.25 + i * 2.3) * 0.006;
        const nx = n.x * canvas.width;
        const ny = n.y * canvas.height;

        const distToMouse = Math.sqrt(Math.pow(nx - mx, 2) + Math.pow(ny - my, 2));
        const mouseGlow = Math.max(0, 1 - distToMouse / 180);
        const pulse = 0.5 + Math.sin(time * n.pulseSpeed + n.pulsePhase) * 0.3;
        const finalOpacity = (0.15 + pulse * 0.2 + mouseGlow * 0.5);
        const finalSize = n.size * (1 + mouseGlow * 1.5 + pulse * 0.2);

        // Outer glow
        const glowRadius = finalSize * 5;
        const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowRadius);
        gradient.addColorStop(0, `rgba(129, 140, 248, ${finalOpacity * 0.35})`);
        gradient.addColorStop(0.4, `rgba(99, 180, 200, ${finalOpacity * 0.12})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(nx - glowRadius, ny - glowRadius, glowRadius * 2, glowRadius * 2);

        // Core
        ctx.beginPath();
        ctx.arc(nx, ny, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = mouseGlow > 0.3
          ? `rgba(180, 200, 255, ${finalOpacity})`
          : `rgba(129, 140, 248, ${finalOpacity})`;
        ctx.fill();

        // Active bright center
        if (mouseGlow > 0.5 || n.active) {
          ctx.beginPath();
          ctx.arc(nx, ny, finalSize * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 230, 255, ${finalOpacity * 1.5})`;
          ctx.fill();
        }
      });
    };

    // Draw traveling signals
    const drawSignals = () => {
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          neurons[sig.to].active = true;
          neurons[sig.to].activationTime = time;
          signals.splice(i, 1);
          continue;
        }

        const n1 = neurons[sig.from];
        const n2 = neurons[sig.to];
        const x = (n1.x + (n2.x - n1.x) * sig.progress) * canvas.width;
        const y = (n1.y + (n2.y - n1.y) * sig.progress) * canvas.height;

        // Signal glow
        const glowSize = 12;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        gradient.addColorStop(0, `rgba(${sig.color.join(',')}, 0.7)`);
        gradient.addColorStop(0.3, `rgba(${sig.color.join(',')}, 0.3)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - glowSize, y - glowSize, glowSize * 2, glowSize * 2);

        // Bright core
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        // Trail
        for (let t = 1; t <= 5; t++) {
          const tp = sig.progress - t * sig.speed * 0.8;
          if (tp < 0) break;
          const tx = (n1.x + (n2.x - n1.x) * tp) * canvas.width;
          const ty = (n1.y + (n2.y - n1.y) * tp) * canvas.height;
          ctx.beginPath();
          ctx.arc(tx, ty, 1.5 - t * 0.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${sig.color.join(',')}, ${0.3 * (1 - t / 5)})`;
          ctx.fill();
        }
      }

      // Deactivate neurons
      neurons.forEach((n) => {
        if (n.active && time - n.activationTime > 0.5) {
          n.active = false;
        }
      });

      // Spawn signals periodically
      if (Math.floor(time * 4) > Math.floor((time - 0.016) * 4)) {
        spawnSignal();
      }
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGridOverlay();
      drawAmbientGlow();
      drawConnections();
      drawNeurons();
      drawSignals();

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
