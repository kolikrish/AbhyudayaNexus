'use client'
import { useRef, useEffect } from "react";
import VantaBackground from "./VantaBackground";
import Image from "next/image";
import { FlowButton } from "@/components/ui/flow-button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyMaskRef = useRef<HTMLDivElement>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (stickyMaskRef.current && containerRef.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMaskRef.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
      stickyMaskRef.current.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (!stickyMaskRef.current || !containerRef.current) return 0;
    
    const scrollProgress = 
      stickyMaskRef.current.offsetTop / 
      (containerRef.current.getBoundingClientRect().height - window.innerHeight);
    
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main>
      <div ref={containerRef} className="relative h-[300vh] bg-white">
        {/* Vanta background behind everything */}
        <div className="absolute inset-0 z-0">
          <VantaBackground />
        </div>

        {/* RCC Logo - Always at top left - Increased size */}
        <div className="absolute top-4 left-4 md:top-6 md:left-10 z-50">
          <Image
            src="/assets/logo2.png"
            alt="RCC Logo"
            width={180}
            height={180}
            className="w-16 md:w-30 h-auto"
            priority
          />
        </div>

        {/* Hero Buttons - Desktop: top right | Mobile: on screen below BIHAAN25 with higher z-index */}
        <div className="absolute top-[70vh] left-1/2 -translate-x-1/2 md:top-6 md:right-10 md:left-auto md:translate-x-0 z-60 flex flex-col md:flex-row gap-3 md:gap-4">
          <FlowButton text="Fresher?" hoverText="Join Bihaan" href=""/>
          <FlowButton text="2nd Year?" hoverText="Help Us?" href="" />
        </div>

        {/* Sticky mask container with About section background */}
        <div
          ref={stickyMaskRef}
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-10"
          style={{
            maskImage: 'url(/assets/logo2.png)',
            WebkitMaskImage: 'url(/assets/logo2.png)',
            maskPosition: '52.35% center',
            WebkitMaskPosition: '52.35% center',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: '80%',
            WebkitMaskSize: '80%',
          }}
        >
          {/* About section background that reveals through the mask */}
          <div className="w-full h-full bg-[#0C0C0C]" />
        </div>
      </div>

      {/* Transition div before About section */}
      <div className="w-full h-[70vh] bg-[#0C0C0C]" />
    </main>
  );
}