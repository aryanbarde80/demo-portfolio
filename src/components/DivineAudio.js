"use client";
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';

export default function DivineAudio() {
  const [isMuted, setIsMuted] = useState(true);
  const [ambientSound, setAmbientSound] = useState(null);

  useEffect(() => {
    // Initialize ambient mantra audio loop
    // Note for user: Place your chosen ambient track in public/audio/om_namah_shivaya.mp3
    const sound = new Howl({
      src: ['/audio/om_namah_shivaya.mp3'], // Placeholder path
      loop: true,
      volume: 0.3,
      html5: true, // Force HTML5 Audio to allow play without downloading entire file
      mute: true
    });

    setAmbientSound(sound);
    sound.play();

    // Setup global damru hover sound for all buttons
    // Note for user: Place short damru sound in public/audio/damru_hover.mp3
    const hoverSound = new Howl({
      src: ['/audio/damru_hover.mp3'],
      volume: 0.4
    });

    const handleMouseOver = (e) => {
      // Play damru sound if hovering over clickable elements (if not muted)
      if (!sound.mute() && (e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-pointer'))) {
        hoverSound.play();
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      sound.unload();
      hoverSound.unload();
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const toggleMute = () => {
    if (ambientSound) {
      if (isMuted) {
        ambientSound.mute(false);
      } else {
        ambientSound.mute(true);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <button 
      onClick={toggleMute}
      className={`fixed top-4 right-4 z-50 p-2 rounded-full border transition-all duration-300 ${isMuted ? 'border-[#ff003c]/30 text-[#ff003c]/50 bg-black/40' : 'border-[#ffaa44]/50 text-[#ffaa44] bg-[#ffaa44]/10 shadow-[0_0_15px_rgba(255,170,68,0.4)]'}`}
      title="Toggle Divine Ambiance"
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
    </button>
  );
}
