import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <div className='relative w-full min-h-[60vh] md:min-h-screen bg-[#0C0C0C] flex flex-col items-center justify-end overflow-hidden pb-0'>
     
      {/* Social Media Icons - Responsive layout */}
      <div className='w-full flex items-center justify-center md:justify-between mb-6 md:mb-8 lg:mb-12 z-10 px-4 gap-8 md:gap-0'>
        {/* Instagram - Centered on mobile, left positioned on desktop */}
        <a 
          href="https://www.instagram.com/bihaan_rcciit?igsh=MXVhMjJrZjMxOHZlbg==" 
          target="_blank" 
          rel="noopener noreferrer"
          className='flex items-center gap-2 md:gap-3 text-white transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-[rgb(255,242,235)] hover:drop-shadow-[0_0_8px_rgba(255,242,235,0.5)] md:ml-[33%]'
        >
          <Instagram size={20} strokeWidth={1.5} className='md:w-6 md:h-6 lg:w-7 lg:h-7' />
          <span className='text-xs md:text-base lg:text-lg font-light tracking-wider'>Instagram</span>
        </a>
        
        {/* Facebook - Centered on mobile, right positioned on desktop */}
        <a 
          href="https://www.facebook.com/share/19h19QofkC/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='flex items-center gap-2 md:gap-3 text-white transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:text-[rgb(255,242,235)] hover:drop-shadow-[0_0_8px_rgba(255,242,235,0.5)] md:mr-[33%]'
        >
          <Facebook size={20} strokeWidth={1.5} className='md:w-6 md:h-6 lg:w-7 lg:h-7' />
          <span className='text-xs md:text-base lg:text-lg font-light tracking-wider'>Facebook</span>
        </a>
      </div>

     
      <div className='relative w-full flex items-end justify-center'>
        <img 
          src="/assets/bihan2footer.png" 
          alt="BIHAAN'25" 
          className='block w-full h-auto object-cover object-bottom'
          style={{
            maxWidth: '100vw',
            width: '95%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  )
}

export default Footer
