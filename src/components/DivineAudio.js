"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';

export default function DivineAudio() {
  const [isMuted, setIsMuted] = useState(true);
<<<<<<< HEAD
  const ambientSoundRef = useRef(null);

  useEffect(() => {
    // Initialize ambient mantra audio loop
    const sound = new Howl({
      src: ['/audio/om_namah_shivaya.mp3'], // Placeholder path
      loop: true,
      volume: 0.3,
      html5: true, 
      mute: true
    });

    ambientSoundRef.current = sound;
    sound.play();

    // Setup global damru hover sound for all buttons
    const hoverSound = new Howl({
      src: ['/audio/damru_hover.mp3'],
      volume: 0.4
    });

    const handleMouseOver = (e) => {
      if (ambientSoundRef.current && !ambientSoundRef.current.mute() && (e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-pointer'))) {
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
    if (ambientSoundRef.current) {
=======
  const [isAvailable, setIsAvailable] = useState(false);
  const ambientSoundRef = useRef(null);
  const hoverSoundRef = useRef(null);

  useEffect(() => {
    try {
      // Initialize ambient mantra audio loop
      const sound = new Howl({
        src: ['/audio/om_namah_shivaya.mp3'],
        loop: true,
        volume: 0.3,
        html5: true, 
        mute: true,
        onload: () => setIsAvailable(true),
        onerror: () => {
          console.warn('Ambient audio file not found. Audio feature disabled.');
          setIsAvailable(false);
        }
      });

      ambientSoundRef.current = sound;
      sound.play();

      // Setup global damru hover sound for all buttons
      const hoverSound = new Howl({
        src: ['/audio/damru_hover.mp3'],
        volume: 0.4,
        onerror: () => {
          console.warn('Hover sound file not found.');
        }
      });
      hoverSoundRef.current = hoverSound;

      const handleMouseOver = (e) => {
        if (ambientSoundRef.current && !ambientSoundRef.current.mute() && isAvailable && (e.target.closest('button') || e.target.closest('a') || e.target.closest('.cursor-pointer'))) {
          if (hoverSoundRef.current) {
            hoverSoundRef.current.play();
          }
        }
      };

      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        if (sound) sound.unload();
        if (hoverSound) hoverSound.unload();
        window.removeEventListener('mouseover', handleMouseOver);
      };
    } catch (e) {
      console.warn('Audio initialization failed:', e);
      setIsAvailable(false);
    }
  }, [isAvailable]);

  const toggleMute = () => {
    if (ambientSoundRef.current && isAvailable) {
>>>>>>> 172f262 (fix: resolve deployment crash and hydration issues)
      const currentlyMuted = ambientSoundRef.current.mute();
      ambientSoundRef.current.mute(!currentlyMuted);
      setIsMuted(!currentlyMuted);
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
