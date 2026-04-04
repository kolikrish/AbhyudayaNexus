"use client";

import { motion } from "framer-motion";

export default function Screen2Mobile({ images }: { images: string[] }) {
  const loop = [...images, ...images];

  return (
    <div className="md:hidden w-full h-full relative overflow-hidden">
      <motion.div 
        className="flex flex-col gap-[2vw] w-full"
        animate={{
          y: [0, "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear",
        }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden rounded-lg aspect-3/4 shrink-0"
          >
            <img
              src={src}
              alt={`Volunteer ${i + 1}`}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full object-cover pointer-events-none block"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
