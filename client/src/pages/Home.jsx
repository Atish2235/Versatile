import React from 'react'
import Hero from '@components/sections/Hero'
import Features from '@components/sections/Features'
import Stats from '@components/sections/Stats'
import Services from '@components/sections/Services'
import Portfolio from '@components/sections/Portfolio'
import VideoModal from '@components/sections/VideoModal'
import Process from '@components/sections/Process'
import FunFacts from '@components/sections/FunFacts'
import Testimonials from '@components/sections/Testimonials'
import Partners from '@components/sections/Partners'
import Pricing from '@components/sections/Pricing'
import CTA from '@components/sections/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <Services />
      <VideoModal 
        title="See How We Work"
        subtitle="Watch our process and discover what makes us different"
      />
      <Stats />
      <Process />
      <Portfolio />
      <FunFacts background="light" />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}

export default Home
