/* eslint-disable */

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Colors, Liquid } from '@/components/ui/liquid-gradient';
import Screen2Mobile from './Screen2Mobile';

const images = [
  "https://i.postimg.cc/nzWH7JFW/img23.jpg",
  "https://i.postimg.cc/wTzF2Cb5/img2.jpg",
  "https://i.postimg.cc/T1XmjH6M/Subh-0189.jpg",
  "https://i.postimg.cc/YSVBmrRx/img11.jpg",
  "https://i.postimg.cc/vHdMzmsL/img12.jpg",
  "https://i.postimg.cc/yNmwQmy1/img-19.jpg",
  "https://i.postimg.cc/x81GDQr4/img14.jpg",
  "https://i.postimg.cc/hPynq1mw/img15.jpg",
  "https://i.postimg.cc/pTp8qZDr/img16.jpg",
  "https://i.postimg.cc/NM6Yqh8X/img20.jpg",
  "https://i.postimg.cc/fbswRTHx/img5.jpg",
  "https://i.postimg.cc/1RdsNKCQ/img6.jpg",
  "https://i.postimg.cc/vBBw4157/img8.jpg",
  "https://i.postimg.cc/9QbWzHs1/img9.jpg",
  "https://i.postimg.cc/0jC8mgbN/img17.jpg",
  "https://i.postimg.cc/HWfM1GwK/img21.jpg",
  "https://i.postimg.cc/XJttHsBz/Subh-0699.jpg",
  "https://i.postimg.cc/5yvTZ8wj/Subh-0705.jpg",
  "https://i.postimg.cc/fyXp6Yxt/Subh-0685.jpg",
  "https://i.postimg.cc/nz1QTPWM/Subh-0709.jpg",
  "https://i.postimg.cc/Hxt73hNw/Subh-0132.jpg",
  "https://i.postimg.cc/d31D6td6/Subh-0109.jpg",
  "https://i.postimg.cc/qRrkbMf2/Subh-0926.jpg",
  "https://i.postimg.cc/MHm2nyv8/Subh-0005.jpg",
  "https://i.postimg.cc/K8qb7rQY/Subh-0021.jpg",
  "https://i.postimg.cc/kGQ9W0YZ/Subh-0475.jpg",
  "https://i.postimg.cc/4dhXx7zM/Subh-0481.jpg",
  "https://i.postimg.cc/7ZDhtVgC/Subh-0782.jpg"



];

const COLORS: Colors = {
  color1: '#FFC300',
  color2: '#FF1F00',
  color3: '#2D00FF',
  color4: '#FFEBEB',
  color5: '#FFD700',
  color6: '#FF4500',
  color7: '#4B0082',
  color8: '#FFB6C1',
  color9: '#FFA500',
  color10: '#FF0000',
  color11: '#8B00FF',
  color12: '#FFF0F0',
  color13: '#FFAA00',
  color14: '#FF6347',
  color15: '#5D00FF',
  color16: '#FFD0D0',
  color17: '#FF8C00',
};

const HelpUsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex justify-center'>
      <a
        href="https://forms.gle/CrRE8185gqmLR9Vb7"
        target="_blank"
        rel="noopener noreferrer"
        className='relative inline-block w-60 h-[3.6em] mx-auto group bg-white border-black border-2 rounded-full'
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
              className={`absolute inset-0 rounded-full border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-xs'
                }`}
            ></span>
          ))}
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-full filter blur-[15px] bg-[#600060]'></span>
        </div>
        <span className='absolute inset-0 flex items-center justify-center px-4 gap-2 rounded-full group-hover:text-yellow-300 text-white text-lg font-semibold tracking-wide whitespace-nowrap pointer-events-none'>
          Help Us
        </span>
      </a>
    </div>
  );
};

const Volunteers = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const screen1Ref = useRef<HTMLDivElement>(null);
  const screen2Ref = useRef<HTMLDivElement>(null);
  const screen3Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: screen1Progress } = useScroll({
    target: screen1Ref,
    offset: ["start start", "end center"],
  });

  const { scrollYProgress: screen2Progress } = useScroll({
    target: screen2Ref,
    offset: ["start center", "end center"],
  });

  const { scrollYProgress: screen3Progress } = useScroll({
    target: screen3Ref,
    offset: ["start center", "end end"],
  });

  const screen1Y = useTransform(screen1Progress, [0, 1], [0, -100]);
  const screen2Y = useTransform(screen2Progress, [0, 1], [0, -50]);
  const screen3Y = useTransform(screen3Progress, [0, 1], [0, -120]);

  return (
    <main className="w-full bg-[#0C0C0C] text-white">
      {/* Screen 1: Organizers Text with Scroll Effect */}
      <div ref={screen1Ref} className="relative flex min-h-[70vh] md:h-screen items-center justify-center flex-col gap-6 md:gap-8 py-16 md:py-20 px-4 overflow-hidden">
        <motion.div style={{ y: screen1Y }} className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto text-center">
          <h2
            className="font-medium text-5xl md:text-[10rem] lg:text-[12rem] leading-[1.1] pb-4"
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              background: 'url(/assets/gradient%20bg.jpg) center/cover',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Organizers
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed px-4 md:px-8 max-w-2xl"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            Their commitment and effort are the reason Bihaan shines every year.
          </p>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div style={{ y: useTransform(screen1Progress, [0, 1], [0, -60]) }} className="absolute left-1/2 bottom-[5%] md:bottom-[10%] grid -translate-x-1/2 content-start justify-items-center gap-4 md:gap-6 text-center">
          <span className="relative max-w-[12ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 before:absolute before:left-1/2 before:bottom-full before:h-12 md:before:h-16 before:w-px before:bg-linear-to-t before:from-white/80 before:to-white/20 before:content-['']">
            scroll down
          </span>
        </motion.div>
      </div>

      {/* Screen 2: Auto-Scrolling Images Gallery */}
      <motion.div
        ref={screen2Ref}
        style={{ y: screen2Y }}
        className="relative box-border flex h-[175vh] w-screen gap-[2vw] overflow-hidden bg-[#0C0C0C] p-[2vw] md:justify-center justify-center items-start md:items-start"
      >
        {/* Mobile: Single column with all images - scrolling up, faster */}
        <Screen2Mobile images={images} />

        {/* Desktop: Four columns - evenly distributed */}
        <Column images={[images[0], images[1], images[2], images[3],images[16],images[17],images[18]]} direction="up" duration={25} className="hidden md:flex" />
        <Column images={[images[4], images[5], images[6], images[7],images[19],images[20],images[21]]} direction="down" duration={25} className="hidden md:flex" />
        <Column images={[images[8], images[9], images[10], images[11],images[22],images[23],images[24]]} direction="up" duration={25} className="hidden md:flex" />
        <Column images={[images[12], images[13], images[14], images[15],images[25],images[26],images[27]]} direction="down" duration={25} className="hidden md:flex" />
      </motion.div>

      {/* Screen 3: Help Us Call to Action - Responsive */}
      <div ref={screen3Ref} className="relative flex min-h-[60vh] md:h-screen items-center justify-center flex-col gap-6 md:gap-8 py-12 md:py-0 px-4 overflow-hidden">
        <motion.div style={{ y: useTransform(screen3Progress, [0, 1], [0, -70]) }} className="absolute left-1/2 top-[5%] md:top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-4 md:gap-6 text-center">
          <span className="relative max-w-[12ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-12 md:after:h-16 after:w-px after:bg-linear-to-b after:from-white/80 after:to-white/20 after:content-['']">
            scroll up to see
          </span>
        </motion.div>

        <motion.div style={{ y: screen3Y }} className="flex flex-col items-center justify-center gap-6 md:gap-8 px-4 mt-16 md:mt-0">
          <h3 className="text-5xl sm:text-6xl md:text-9xl lg:text-9xl font-medium text-[#FFF3D2] text-center px-4"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            2nd Year?
          </h3>
          <HelpUsButton />
        </motion.div>
      </div>
    </main>
  );
};

type ColumnProps = {
  images: string[];
  direction: "up" | "down";
  duration: number;
  className?: string;
};

const Column = ({ images, direction, duration, className = "" }: ColumnProps) => {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  const yStart = direction === "down" ? 0 : 0;
  const yEnd = direction === "down" ? 1000 : -1000;

  return (
    <motion.div
      className={`relative -top-[45%] flex h-full flex-col gap-[2vw] ${className} md:w-1/4 md:flex-1 w-full max-w-[280px]`}
      animate={{
        y: [yStart, yEnd],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: duration,
        ease: "linear",
      }}
    >
      {duplicatedImages.map((src, i) => (
        <div key={i} className="relative w-full overflow-hidden rounded-lg aspect-3/4 shrink-0">
          <img
            src={src}
            alt={`Volunteer ${i + 1}`}
            className="pointer-events-none w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default Volunteers;