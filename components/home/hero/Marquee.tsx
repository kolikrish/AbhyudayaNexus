'use client';
import React from 'react';
import ScrollBaseAnimation from '@/components/ui/scroll-text-marque';

function Marquee() {
  return (
    <div className='w-full min-h-125 flex flex-col items-center justify-center border-y-8 border-yellow-400'>
      <div className="w-full">
        <ScrollBaseAnimation
          baseVelocity={3}
          scrollDependent={true}
          clasname='font-black tracking-[-0.07em] leading-[90%] text-white'
        >
          Experience Abhyudaya&apos;Nexus
        </ScrollBaseAnimation>
      </div>
    </div>
  );
}

export default Marquee;
