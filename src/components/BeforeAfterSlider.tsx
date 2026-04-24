"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video select-none overflow-hidden rounded-sm cursor-ew-resize"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Base) */}
      <Image
        src={afterImage}
        alt="After color grading"
        fill
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before color grading"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-black/50" />
            <div className="w-0.5 h-3 bg-black/50" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest text-white drop-shadow-md pointer-events-none">
        Before
      </div>
      <div className="absolute bottom-4 right-4 text-xs font-medium uppercase tracking-widest text-white drop-shadow-md pointer-events-none">
        After
      </div>
    </div>
  );
}
