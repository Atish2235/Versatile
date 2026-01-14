import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const CTA = ({
  title = 'Work with the Best Digital Marketing Company in Pune Today',
  subtitle = 'Stop guessing. Start growing.',
  primaryButtonText = 'Book a Free Consultation',
  primaryButtonLink = '/contact',
}) => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0E1E26] via-[#123747] to-[#0E1E26] overflow-hidden">

      {/* Soft background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#35B6D9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#F5C144]/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-white mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-[#B0C4CF] mb-10 leading-relaxed">
            {subtitle}
          </p>

          {/* Single CTA Button */}
          <div className="flex justify-center">
            <Button
              to={primaryButtonLink}
              size="lg"
              className="
                bg-[#F5C144] text-black
                hover:bg-[#E6B13A]
                shadow-lg hover:shadow-xl
                transition-all
              "
            >
              {primaryButtonText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTA
