"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicQuote() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const words = [
    { text: "Not me,", delay: 0 },
    { text: "but", delay: 0.3, highlight: false },
    { text: "Discipline", delay: 0.6, highlight: true, color: "#00f0ff" },
    { text: "&", delay: 0.9 },
    { text: "Consistency", delay: 1.1, highlight: true, color: "#ff003c" },
  ];

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const wordEls = containerRef.current.querySelectorAll('.cinematic-word');
    const subtitleEl = containerRef.current.querySelector('.cinematic-subtitle');
    const lineEl = containerRef.current.querySelector('.cinematic-line');

    // Set initial states
    gsap.set(wordEls, { 
      y: 80, 
      opacity: 0, 
      scale: 0.8, 
      filter: 'blur(12px)',
      rotationX: -20 
    });
    gsap.set(subtitleEl, { y: 30, opacity: 0 });
    gsap.set(lineEl, { scaleX: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => setHasAnimated(true),
      }
    });

    // Animate each word with cinematic reveal
    wordEls.forEach((word, i) => {
      tl.to(word, {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        rotationX: 0,
        duration: 0.8,
        ease: 'power4.out',
      }, i * 0.25);
    });

    // Animate the line
    tl.to(lineEl, {
      scaleX: 1,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '-=0.3');

    // Animate subtitle
    tl.to(subtitleEl, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.2');

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [hasAnimated]);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-4xl mx-auto my-12 sm:my-16 py-10 sm:py-16 px-6 relative overflow-hidden"
    >
      {/* Background vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)]"></div>
      
      {/* Main Quote */}
      <div className="relative z-10 text-center perspective-[1000px]">
        <div className="flex flex-wrap justify-center items-baseline gap-x-3 sm:gap-x-5 gap-y-2">
          {words.map((word, idx) => (
            <span
              key={idx}
              className={`cinematic-word inline-block font-black tracking-tight will-change-transform ${
                word.highlight 
                  ? 'text-4xl sm:text-5xl md:text-7xl' 
                  : 'text-2xl sm:text-3xl md:text-5xl text-gray-400'
              }`}
              style={word.color ? { 
                color: word.color, 
                textShadow: `0 0 30px ${word.color}40, 0 0 60px ${word.color}20` 
              } : {}}
            >
              {word.text}
            </span>
          ))}
        </div>

        {/* Divider line */}
        <div className="cinematic-line h-[2px] w-32 sm:w-48 mx-auto mt-6 sm:mt-8 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent origin-center"></div>

        {/* Subtitle */}
        <p className="cinematic-subtitle text-xs sm:text-sm mono text-gray-500 mt-4 sm:mt-6 tracking-[0.2em] uppercase">
          — The philosophy that drives every line of code —
        </p>
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#00f0ff]/20"></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#00f0ff]/20"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#00f0ff]/20"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#00f0ff]/20"></div>
    </div>
  );
}
