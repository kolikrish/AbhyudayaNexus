// components/ui/RevealImage.tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface RevealImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto'
  objectFit?: 'cover' | 'contain' | 'fill'
  objectPosition?: string
}

export default function RevealImage({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio = 'auto',
  objectFit = 'cover',
  objectPosition = 'center',
}: RevealImageProps) {
  
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isActive, setIsActive] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"]
  })

  // Mobile: Always 100% visible, Desktop: Animated reveal
  const maskPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['0% 0%', '100% 0%']
  )

  const maskSize = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['100% 100%', '100% 100%'] : ['0% 100%', '100% 100%']
  )

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: 'h-full',
  }

  const handleTouch = () => {
    if (isMobile) {
      setIsActive(!isActive)
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden border-2 border-zinc-700',
        aspectRatioClasses[aspectRatio],
        className
      )}
      onClick={handleTouch}
      onTouchStart={handleTouch}
    >
      <motion.div
        style={{
          WebkitMaskImage: 'linear-gradient(to right, black, black)',
          maskImage: 'linear-gradient(to right, black, black)',
          WebkitMaskSize: maskSize,
          maskSize: maskSize,
          WebkitMaskPosition: maskPosition,
          maskPosition: maskPosition,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
        className="w-full h-full"
      >
        <div className={cn("w-full h-full group", isActive && isMobile && "hover-active")}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={95}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1440px"
            className={cn(
              `object-${objectFit}`,
              'grayscale transition-all duration-700 ease-out',
              'group-hover:grayscale-0 group-hover:scale-110',
              isActive && isMobile && 'grayscale-0 scale-110'
            )}
            style={{ 
              objectPosition,
              willChange: 'transform, filter',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
