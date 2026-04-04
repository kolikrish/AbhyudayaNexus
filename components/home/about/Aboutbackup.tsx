// components/about/About.tsx
'use client'
import React from 'react'
import TextAnimation from '@/components/ui/scroll-text'
import RevealImage from '@/components/ui/RevealImage'
import GradientSmokeText from '@/components/ui/GradientSmokeText'
import ScrollBaseAnimation from '@/components/ui/scroll-text-marque'
import SplashCursor from '@/components/ui/SplashCursor'

const About = () => {
  return (
    <div className="w-full bg-[#0C0C0C] text-[#FFF2EB] py-16 px-1 md:px-2 lg:px-2 relative">
       <SplashCursor /> 
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section 1: Main intro - Center with large Bihan with smoke effect */}
        <GradientSmokeText 
          text="Bihaan'25"
          subtitle="The grand welcome for the newest wave of RCCIIT."
        />

        {/* Section 2: Celebration - Left text, Right image */}
        <div className="min-h-[40vh] md:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="order-1 flex items-start min-h-[200px] md:min-h-[700px] z-10 relative pt-4 md:pt-8">
            <TextAnimation
              as="p"
              letterAnime={true}
              text="A celebration of fresh faces, new energy, and unforgettable vibes."
              direction="left"
              viewport={{ amount: 0.3, once: false }}
              classname="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white normal-case!"
              customStyle={{ fontFamily: 'var(--font-lexend), sans-serif' }}
            />
          </div>
          <div className="order-2">
            <RevealImage
              src="/assets/img1.JPG"
              alt="Celebration"
              className="h-[50vh] sm:h-[60vh] md:h-[850px] w-full md:w-[600px] md:mt-48 mx-auto"
              objectFit="cover"
            />
            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              WHERE THE VIBES HIT DIFFERENT
            </p>
          </div>
        </div>

        {/* Section 3: Event details - Left image, Right text */}
        <div className="min-h-[40vh] md:min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="order-2 md:order-1">
            <RevealImage
              src="/assets/img22.JPG"
              alt="Event atmosphere"
              className="h-[50vh] sm:h-[60vh] md:h-[850px] w-full md:w-[600px] md:mt-48 mx-auto"
              objectFit="cover"
            />
            <p className="mt-3 md:mt-4 text-white text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.15em] md:tracking-[0.2em]">
              FIRST DAY FEELS, FOREVER MEMORIES
            </p>
          </div>
          <div className="order-1 md:order-2 flex items-start min-h-[200px] md:min-h-[700px] z-10 relative pt-4 md:pt-8">
            <TextAnimation
              as="p"
              text="This event brings music, lights, laughter, and moments that stay long after the night ends."
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
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            New <span className='gradient-smoke-statement'>faces</span>
          </h2>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            New <span className='gradient-smoke-statement'>hype.</span>
          </h2>
          
          <h2 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black"
            style={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          >
            New <span className='gradient-smoke-statement'>beginnings.</span> 
          </h2>
        </div>

        {/* Section 5: Final statements */}
        <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-8">
          <TextAnimation
            as="h2"
            text="Bihan’25 is here."
            direction="up"
            lineAnime={true}
            viewport={{ amount: 0.5, once: false }}
            classname="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFF2EB]  normal-case!"
            customStyle={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          />
          
          <TextAnimation
            as="h2"
            text="This is your beginning."
            direction="up"
            lineAnime={true}
            viewport={{ amount: 0.5, once: false }}
            classname="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFF2EB] normal-case!"
            customStyle={{ fontFamily: 'var(--font-lexend), sans-serif' }}
          />
        </div>

        {/* Section 6: Image 3 - Left image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start pt-1">
          <div className="order-1">
            <RevealImage
              src="/assets/img23.JPG"
              alt="Bihan moments"
              className="h-[500px] md:h-[850px] w-full md:w-[600px] md:mt-20 mx-auto"
              objectFit="cover"
            />
            <p className="mt-4 text-white text-sm md:text-base font-light uppercase tracking-[0.2em]">
              FRESHERS BRINGING THE ENERGY
            </p>
          </div>
          <div className="order-2"></div>
        </div>

        {/* Section 7: Image 4 - Center image */}
        <div className="flex flex-col justify-center items-center w-full py-10">
          <div className="w-full max-w-[1000px] h-[400px] md:h-[600px]">
            <RevealImage
              src="/assets/img18.JPG"
              alt="Event highlights"
              className="w-full h-full"
              objectFit="cover"
            />
          </div>
          <p className="mt-4 text-white text-sm md:text-base font-light uppercase tracking-[0.2em] text-center">
            THIS IS HOW WE ROLL AT RCCIIT
          </p>
        </div>

        {/* Section 8: Image 5 - Left image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="order-1">
            <RevealImage
              src="/assets/img21.JPG"
              alt="College celebration"
              className="h-[500px] md:h-[850px] w-full md:w-[600px] md:mt-20 mx-auto"
              objectFit="cover"
            />
            <p className="mt-4 text-white text-sm md:text-base font-light uppercase tracking-[0.2em]">
              SQUAD GOALS UNLOCKED
            </p>
          </div>
          <div className="order-2"></div>
        </div>

        {/* Section 9: Image 6 - Right image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start pb-16">
          <div className="order-1"></div>
          <div className="order-2">
            <RevealImage
              src="/assets/img7.JPG"
              alt="Memorable moments"
              className="h-[500px] md:h-[850px] w-full md:w-[600px] md:mt-20 mx-auto"
              objectFit="cover"
            />
            <p className="mt-4 text-white text-sm md:text-base font-light uppercase tracking-[0.2em]">
              NEW CHAPTER, EPIC VIBES
            </p>
          </div>
        </div>

      </div>

      {/* Marquee Section - Full Width */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[300px] flex items-center justify-center bg-[#0C0C0C] border-y-4 border-white/10 overflow-hidden marquee-hover-container">
        <div className="marquee-container">
          <ScrollBaseAnimation
            baseVelocity={3}
            scrollDependent={true}
            clasname='font-semibold tracking-[-0.02em] leading-[0.9] text-[4rem] text-transparent bg-gradient-to-r from-[#f5f5f5] via-[#cfcfcf] to-[#6e6e6e] bg-clip-text transition-all duration-300'
          >
            Experience Bihan'25
          </ScrollBaseAnimation>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          width: 100%;
          position: relative;
        }

        .marquee-hover-container:hover :global(span) {
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
