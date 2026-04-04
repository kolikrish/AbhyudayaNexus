// components/about/About.tsx
'use client'
import React, { useState, useEffect } from 'react'
import TextAnimation from '@/components/ui/scroll-text'
import RevealImage from '@/components/ui/RevealImage'
import GradientSmokeText from '@/components/ui/GradientSmokeText'
import ScrollBaseAnimation from '@/components/ui/scroll-text-marque'
import SplashCursor from '@/components/ui/SplashCursor'

const About = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [marqueeActive, setMarqueeActive] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMarqueeTouch = () => {
    if (isMobile) {
      setMarqueeActive(!marqueeActive)
    }
  }

  return (
    <div className="w-full bg-[#0C0C0C] text-[#FFF2EB] py-12 md:py-16 px-4 md:px-2 lg:px-2 relative overflow-hidden">
      <SplashCursor />
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">

        {/* Section 1: Main intro - Center with large Bihan with smoke effect */}
        <GradientSmokeText
          text="AbhyudayaNexus"
          subtitle="Where innovation meets connection"
        />

        {/* Section 2: Celebration - Left text, Right image */}
        <div className="min-h-[40vh] md:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="order-1 flex items-start min-h-[150px] md:min-h-[700px] z-10 relative pt-4 md:pt-8">
            <TextAnimation
              as="p"
              letterAnime={true}
              text="A hub of events, workshops, and hands-on sessions. Experience innovation through curated events and sessions."
              direction="left"
              viewport={{ amount: 0.3, once: false }}
              classname="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white normal-case!"
              customStyle={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            />
          </div>
          <div className="order-2">
            <div className="w-full aspect-3/4 mx-auto">
              <RevealImage
                src="https://i.postimg.cc/j5xWvtrX/img1.jpg"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>


            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              WHERE THE VIBES HIT DIFFERENT
            </p>
          </div>
        </div>

        {/* Section 3: Event details - Left image, Right text */}
        <div className="min-h-[40vh] md:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="order-2 md:order-1">
           <div className="w-full aspect-3/4 mx-auto">
              <RevealImage
                src="https://i.postimg.cc/T2Hd0Sbj/img4.jpg"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              FIRST DAY FEELS, FOREVER MEMORIES
            </p>
          </div>
          <div className="order-1 md:order-2 flex items-start min-h-[150px] md:min-h-[700px] z-10 relative pt-4 md:pt-8">
            <TextAnimation
              as="p"
              text="This hackathon brings coders together to build, innovate, and create solutions that matter. A space of code, chaos, creativity, and unforgettable breakthroughs."
              direction="right"
              viewport={{ amount: 0.3, once: false }}
              classname="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white md:text-right normal-case!"
              customStyle={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            />
          </div>
        </div>

        {/* Section 4: Triple statements */}
        <div className="min-h-[30vh] md:min-h-[50vh] flex flex-col items-center justify-center space-y-4 md:space-y-7 py-8">
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            New <span className='gradient-smoke-statement'>faces</span>
          </h2>

          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            New <span className='gradient-smoke-statement'>hype.</span>
          </h2>

          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-center leading-[1.2] pb-4"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            New <span className='gradient-smoke-statement'>beginnings.</span>
          </h2>
        </div>

        {/* Section 5: Final statements */}
        <div className="min-h-[30vh] md:min-h-[50vh] flex flex-col items-center justify-center space-y-5 md:space-y-8 py-8 text-[#FFF3D2]">
          <TextAnimation
            as="h2"
            text="Bihaan'25 is here."
            direction="up"
            lineAnime={true}
            viewport={{ amount: 0.5, once: false }}
            classname="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-[#FFF3D2] text-center normal-case!"
            customStyle={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          />

          <TextAnimation
            as="h2"
            text="This is your beginning."
            direction="up"
            lineAnime={true}
            viewport={{ amount: 0.5, once: false }}
            classname="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-[#FFF3D2] text-center normal-case!"
            customStyle={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          />
        </div>

        {/* Section 6: Image 3 - Left image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start pt-1">
          <div className="order-1">
            <div className="w-full aspect-3/4 mx-auto">
              <RevealImage
                src="https://i.postimg.cc/C1ztxvKx/img26.jpg"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              FRESHERS BRINGING THE ENERGY
            </p>
          </div>
          <div className="order-2"></div>
        </div>

        {/* Section 7: Image 4 - Center image */}
        <div className="flex flex-col justify-center items-center w-full py-6 md:py-10">
          <div className="w-full max-w-[1000px] h-[40vh] sm:h-[50vh] md:h-[600px]">
           
              <RevealImage
                src="https://i.postimg.cc/287Scg2B/img18.jpg"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            
          </div>
          <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em] text-center">
            THIS IS HOW WE ROLL AT RCCIIT
          </p>
        </div>

        {/* Section 8: Image 5 - Left image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="order-1">
            <div className="w-full aspect-3/4 mx-auto">
              <RevealImage
                src="https://i.postimg.cc/HWfM1GwK/img21.jpg"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              SQUAD GOALS UNLOCKED
            </p>
          </div>
          <div className="order-2"></div>
        </div>

        {/* Section 9: Image 6 - Right image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start pb-10 md:pb-16">
          <div className="order-1"></div>
          <div className="order-2">
           <div className="w-full aspect-3/4 mx-auto">
              <RevealImage
                src="https://i.postimg.cc/3wSyLzrP/img7.jpg"
                alt="Celebration"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              NEW CHAPTER, EPIC VIBES
            </p>
          </div>
        </div>

      </div>

      {/* Marquee Section - Full Width */}
      <div 
        className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[200px] md:min-h-[300px] flex items-center justify-center bg-[#0C0C0C] border-y-4 border-white/10 overflow-hidden marquee-hover-container ${marqueeActive ? 'marquee-active' : ''}`}
        onClick={handleMarqueeTouch}
        onTouchStart={handleMarqueeTouch}
      >
        <div className="marquee-container">
          <ScrollBaseAnimation
            baseVelocity={3}
            scrollDependent={true}
            clasname='font-semibold tracking-[-0.02em] leading-[0.9] text-[2.5rem] sm:text-[4rem] md:text-[7rem] text-transparent bg-gradient-to-r from-[#f5f5f5] via-[#cfcfcf] to-[#6e6e6e] bg-clip-text transition-all duration-300'
          >
            Experience Bihaan'25
          </ScrollBaseAnimation>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          position: relative;
        }

        @media (hover: hover) {
          .marquee-hover-container:hover :global(span) {
            background: url(/assets/gradient%20bg.jpg) center/cover !important;
            -webkit-background-clip: text !important;
            background-clip: text !important;
            color: transparent !important;
          }
        }

        .marquee-active :global(span) {
          background: url(/assets/gradient%20bg.jpg) center/cover !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: transparent !important;
        }

        :global(.gradient-smoke-text) {
          background: url(/assets/gradient%20bg.jpg) center/cover !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: transparent !important;
          position: relative;
          display: inline-block;
        }

        :global(.gradient-smoke-statement) {
          background: url(/assets/gradient%20bg.jpg) center/cover;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default About
