import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'

/**
 * PDF AUTHORITY STATS — USED AS-IS
 */
const pdfStats = [
  { value: '9+', label: 'Years of Experience in Digital Marketing' },
  { value: '200+', label: 'Clients Served Across Pune & PCMC' },
  { value: '100%', label: 'In-House Marketing, Design & Development Team' },
  { value: 'ROI', label: 'Focused Campaigns with Measurable Results' },
]

const Stats = ({ stats = pdfStats }) => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#0E3A4A] via-[#124B5E] to-[#0E3A4A] overflow-hidden">

      {/* subtle glow background */}
      <div className="absolute inset-0 bg-[#35B6D9]/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3">
                {stat.value}
              </div>

              <div className="text-[#C7D2DA] text-sm md:text-base tracking-wide max-w-[220px] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stats
