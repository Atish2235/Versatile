import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiUsers, FiLayers, FiBarChart2 } from 'react-icons/fi'
import Container from '@components/ui/Container'

/**
 * PDF LOCAL & TRUST SIGNALS — USED AS-IS
 */
const pdfFacts = [
  {
    icon: FiMapPin,
    value: 'Akurdi',
    suffix: '',
    label: 'Based in Akurdi, Serving PCMC & Pune',
  },
  {
    icon: FiUsers,
    value: '200+',
    suffix: '',
    label: 'Businesses Served Across Multiple Industries',
  },
  {
    icon: FiLayers,
    value: 'In-House',
    suffix: '',
    label: 'Marketing, Design & Development Team',
  },
  {
    icon: FiBarChart2,
    value: 'ROI',
    suffix: '',
    label: 'Focused Campaigns With Measurable Results',
  },
]

const FunFacts = ({ facts = pdfFacts, background = 'dark' }) => {
  const isDark = background === 'dark'

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-br from-[#0E1E26] via-[#123747] to-[#0E1E26]'
          : 'bg-[#F5F7FA]'
      }`}
    >
      {/* subtle glow */}
      {isDark && (
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-1/4 w-[400px] h-[400px] bg-[#35B6D9]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] right-1/4 w-[400px] h-[400px] bg-[#F5C144]/10 rounded-full blur-3xl" />
        </div>
      )}

      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center
                ${
                  isDark
                    ? 'bg-white/10 backdrop-blur border border-white/10'
                    : 'bg-white shadow-md'
                }`}
              >
                <fact.icon
                  size={32}
                  className="text-[#35B6D9]"
                />
              </div>

              {/* Value */}
              <div className="text-2xl md:text-3xl font-bold mb-2">
                <span className={isDark ? 'text-white' : 'text-neutral-900'}>
                  {fact.value}
                </span>
                {fact.suffix && (
                  <span className="text-[#F5C144]">{fact.suffix}</span>
                )}
              </div>

              {/* Label */}
              <p
                className={`text-sm md:text-base max-w-[220px] mx-auto ${
                  isDark ? 'text-[#C7D2DA]' : 'text-neutral-600'
                }`}
              >
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FunFacts
