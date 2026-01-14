import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero = ({
  title = 'Digital Marketing Company in Akurdi, Pune with 9+ Years of Expertise.',
  subtitle = "We're a full-stack digital marketing company in Pune, based in Akurdi–PCMC, helping your business get real leads, not just clicks.",
  ctaPrimary = 'Get a Free Consultation',
  ctaPrimaryLink = '/contact',
  illustration,
}) => {
  return (
    <section 
      className="relative overflow-hidden hero-extend min-h-screen"
      style={{
        background: 'radial-gradient(circle at top left, #3DB7E4, #0E0F12 65%)'
      }}
    >
      <Container>
        <div className="pt-20 pb-20 flex flex-col lg:flex-row items-center gap-24 lg:pl-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-[0.95] text-center lg:text-left lg:-ml-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-subheading mb-8 max-w-3xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button to={ctaPrimaryLink} variant="primary" size="lg">
                {ctaPrimary}
              </Button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-[1.05] relative"
          >
            <div className="aspect-[4/3] max-w-5xl mx-auto relative">
              {/* revolving background image behind main hero (moved upward) */}
              <img
                src="/hero-images/revolvingdots.png"
                alt=""
                className="pointer-events-none revolve absolute"
                style={{
                  right: '3%',
                  top: '2%',
                  transform: 'translateY(0)',
                  width: 520,
                  opacity: 0.45,
                  zIndex: 2,
                }}
              />

              {/* Use the new hero image from public/hero-images (reduced size) */}
              <img
                src="/hero-images/heroimage.png"
                alt="Hero"
                className="w-full h-full object-contain z-10 relative pointer-events-none transform scale-90"
                style={{ zIndex: 5 }}
              />

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F6BC3D] rounded-full opacity-20 blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3DB7E4] rounded-full opacity-20 blur-2xl animate-pulse-slow" />
            </div>
          </motion.div>
        </div>
      </Container>

      <style>{`
        @keyframes spin360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .revolve { animation: spin360 18s linear infinite; transform-origin: center center; will-change: transform; }
      `}</style>
    </section>
  )
}

export default Hero