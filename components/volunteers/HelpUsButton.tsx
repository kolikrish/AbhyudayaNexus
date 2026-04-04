'use client';
import React, { useState } from 'react';
import { Colors, Liquid } from '@/components/ui/liquid-gradient';

const COLORS: Colors = {
  color1: '#FFC300',  // Highlight - Yellow/Gold
  color2: '#FF1F00',  // Midtone - Red/Orange
  color3: '#2D00FF',  // Lowlight - Purple/Blue
  color4: '#FFEBEB',  // Base - Light Pink
  color5: '#FFD700',  // Gold variation
  color6: '#FF4500',  // Orange Red
  color7: '#4B0082',  // Indigo
  color8: '#FFB6C1',  // Light Pink
  color9: '#FFA500',  // Orange
  color10: '#FF0000', // Pure Red
  color11: '#8B00FF', // Violet
  color12: '#FFF0F0', // Very Light Pink
  color13: '#FFAA00', // Amber
  color14: '#FF6347', // Tomato Red
  color15: '#5D00FF', // Blue Purple
  color16: '#FFD0D0', // Pale Pink
  color17: '#FF8C00', // Dark Orange
};

const HelpUsButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex justify-center'>
      <a 
        href="https://forms.gle/CrRE8185gqmLR9Vb7"
        target="_blank"
        rel="noopener noreferrer"
        className='relative inline-block w-56 h-[3.5em] mx-auto group bg-white border-black border-2 rounded-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70'>
          <span className='absolute inset-0 rounded-full bg-[#d9d9d9] filter blur-[6.5px]'></span>
          <div className='relative w-full h-full overflow-hidden rounded-full'>
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-full bg-[#280128] filter blur-[7.3px]'></div>
        <div className='relative w-full h-full overflow-hidden rounded-full'>
          <span className='absolute inset-0 rounded-full bg-[#d9d9d9]'></span>
          <span className='absolute inset-0 rounded-full bg-black'></span>
          <Liquid isHovered={isHovered} colors={COLORS} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-full border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${
                i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-xs'
              }`}
            ></span>
          ))}
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-full filter blur-[15px] bg-[#600060]'></span>
        </div>
        <span className='absolute inset-0 flex items-center justify-center px-4 gap-2 rounded-full group-hover:text-yellow-300 text-white text-xl font-semibold tracking-wide whitespace-nowrap pointer-events-none'>
          Help Us?
        </span>
      </a>
    </div>
  );
};

export default HelpUsButton;