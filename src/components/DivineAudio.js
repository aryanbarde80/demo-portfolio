"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Headphones, Radio } from 'lucide-react';
import { Howl } from 'howler';

export default function SystemAudio() {
  const [isMuted, setIsMuted] = useState(true);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const ambientSoundRef = useRef(null);
  const hoverSoundRef = useRef(null);
  const clickSoundRef = useRef(null);

  useEffect(() => {
    try {
      // Initialize ambient tech ambiance audio (replace with your audio file)
      // You can use: /audio/ambient_tech.mp3 or /audio/system_hum.mp3
      const sound = new Howl({
        src: ['/audio/ambient_tech.mp3'],
        loop: true,
        volume: 0.25,
        html5: true, 
        mute: true,
        onload: () => {
          setIsAvailable(true);
          setIsPlaying(true);
          console.log('System audio loaded successfully');
        },
        onerror: () => {
          console.warn('Ambient audio file not found. Audio feature disabled.');
          setIsAvailable(false);
        }
      });

      ambientSoundRef.current = sound;
      sound.play();

      // Setup hover sound for interactive elements
      const hoverSound = new Howl({
        src: ['/audio/ui_hover.mp3'],
        volume: 0.3,
        onerror: () => {
          console.warn('Hover sound file not found.');
        }
      });
      hoverSoundRef.current = hoverSound;

      // Setup click sound for better feedback
      const clickSound = new Howl({
        src: ['/audio/ui_click.mp3'],
        volume: 0.35,
        onerror: () => {
          console.warn('Click sound file not found.');
        }
      });
      clickSoundRef.current = clickSound;

      // Handle hover effects
      const handleMouseOver = (e) => {
        if (ambientSoundRef.current && !ambientSoundRef.current.mute() && isAvailable) {
          const target = e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-pointer');
          if (target && hoverSoundRef.current) {
            hoverSoundRef.current.play();
          }
        }
      };

      // Handle click effects
      const handleClick = (e) => {
        if (ambientSoundRef.current && !ambientSoundRef.current.mute() && isAvailable) {
          const target = e.target.closest('button') || e.target.closest('a');
          if (target && target !== document.querySelector('.audio-toggle-btn') && clickSoundRef.current) {
            clickSoundRef.current.play();
          }
        }
      };

      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('click', handleClick);

      return () => {
        if (sound) sound.unload();
        if (hoverSound) hoverSound.unload();
        if (clickSound) clickSound.unload();
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('click', handleClick);
      };
    } catch (e) {
      console.warn('Audio initialization failed:', e);
      setIsAvailable(false);
    }
  }, [isAvailable]);

  const toggleMute = () => {
    if (ambientSoundRef.current && isAvailable) {
      const currentlyMuted = ambientSoundRef.current.mute();
      ambientSoundRef.current.mute(!currentlyMuted);
      setIsMuted(!currentlyMuted);
      
      // Play click feedback
      if (!currentlyMuted && clickSoundRef.current) {
        clickSoundRef.current.play();
      }
    }
  };

  // If audio not available, don't render the button
  if (!isAvailable) return null;

  return (
    <button 
      onClick={toggleMute}
      className={`audio-toggle-btn fixed top-4 right-4 z-[70] p-2 rounded-full border backdrop-blur-sm transition-all duration-300 group ${
        isMuted 
          ? 'border-[#ff003c]/30 text-[#ff003c]/50 bg-black/40 hover:border-[#ff003c]/60 hover:text-[#ff003c]/80' 
          : 'border-[#00f0ff]/50 text-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]'
      }`}
      title={isMuted ? "Enable System Audio" : "Mute System Audio"}
    >
      {isMuted ? (
        <VolumeX size={18} className="sm:w-5 sm:h-5" />
      ) : (
        <div className="relative">
          <Volume2 size={18} className="sm:w-5 sm:h-5 animate-pulse" />
          <div className="absolute inset-0 rounded-full animate-ping opacity-50 bg-[#00f0ff]"></div>
        </div>
      )}
      
      {/* Tooltip */}
      <span className="absolute -bottom-8 right-0 text-[8px] sm:text-[9px] mono whitespace-nowrap bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {isMuted ? "UNMUTE_SYSTEM" : "MUTE_SYSTEM"}
      </span>
    </button>
  );
}