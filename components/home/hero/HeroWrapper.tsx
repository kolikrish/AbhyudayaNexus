'use client'

import React, { useState, useEffect } from 'react'
import HeroSection from './HeroSection'
import Preloader from '@/components/Preloader/Preloader'
import { AnimatePresence } from 'framer-motion'

const HeroWraper = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to match the preloader animation duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Adjust this to match your preloader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!isLoading && <HeroSection />}
    </div>
  )
}

export default HeroWraper
