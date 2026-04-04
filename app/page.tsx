import HeroWraper from '@/components/home/hero/HeroWrapper'
import React from 'react'
import GalleryWrapper from '@/components/gallery/GalleryWrapper'
import AboutWraper from '@/components/home/about/AboutWrapper'
import Footer from '@/components/Footer/Footer'
import VolunteerWrapper from '@/components/volunteers/VolunteerWrapper'

const page = () => {
  return (
    <div>
      <HeroWraper/>
      <AboutWraper/>
      <GalleryWrapper/>
      <VolunteerWrapper/>
      <Footer/>
    </div>
  )
}

export default page
