import React from 'react'
import { motion } from 'framer-motion'
// import HeroImage from '../../assets/hero-images/itprof.png' // Removed broken import

// Make sure these paths match your actual folder structure for components
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero = ({
  title = 'Secure IT Solutions For a More Secure Environment', // Updated to match your screenshot
  subtitle = 'We create innovative solutions that help businesses grow and succeed in the digital world.',
  ctaPrimary = 'Get Started',
  ctaSecondary = 'Contact Us',
  ctaPrimaryLink = '/contact',
  ctaSecondaryLink = '/about',
 
  illustration,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
      <Container>
        {/* Reduce top/bottom padding to move content up */}
        <div className="pt-8 pb-8 flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button to={ctaPrimaryLink} variant="primary" size="lg">
                {ctaPrimary}
              </Button>
              <Button to={ctaSecondaryLink} variant="outline" size="lg">
                {ctaSecondary}
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="aspect-square max-w-xl mx-auto relative">
              {/* Revolving dots image */}
              <motion.img
                src="/hero-images/revolvingdots.png"
                alt="Revolving Dots"
                className="absolute inset-0 m-auto w-full h-full object-contain pointer-events-none"
                style={{ zIndex: 5 }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear"
                }}
              />
              {/* Main image */}
              <img
                src="/hero-images/itprof.png"
                alt="IT Professional"
                className="w-full h-full object-contain z-10 relative"
              />
              
              {/* Decorative Elements (Blobs) behind the image */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero