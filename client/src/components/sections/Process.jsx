import React from 'react'
import { motion } from 'framer-motion'
import {
  FiSearch,
  FiMap,
  FiPlay,
  FiTrendingUp,
  FiLayers,
} from 'react-icons/fi'
import Container from '@components/ui/Container'

/**
 * PDF SEO CONTENT — 5 STEP GROWTH MODEL (USED AS-IS)
 */
const pdfSteps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Investigate',
    description:
      'We analyse your audience in Pune/PCMC, your competitors, and your current marketing gaps.',
  },
  {
    icon: FiMap,
    number: '02',
    title: 'Strategise',
    description:
      'We build a customised roadmap combining marketing, development, and design aligned to your business goals.',
  },
  {
    icon: FiPlay,
    number: '03',
    title: 'Execute',
    description:
      'Campaigns that reach your local target through SMO, social ads, Google Ads, websites that convert, and visuals that build trust.',
  },
  {
    icon: FiTrendingUp,
    number: '04',
    title: 'Optimise',
    description:
      'We measure every rupee spent, refine campaigns until they work, and deliver clear monthly insights.',
  },
  {
    icon: FiLayers,
    number: '05',
    title: 'Scale',
    description:
      'Once the engine runs, we scale your leads, your brand presence, and your ROI across Pune and PCMC.',
  },
]

const Process = ({ steps = pdfSteps }) => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0E1E26] via-[#123747] to-[#0E1E26] overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-1/4 w-[420px] h-[420px] bg-[#35B6D9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-1/4 w-[420px] h-[420px] bg-[#F5C144]/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-white">
            How Our Proven 5-Step Growth Model Transforms Brands Across Akurdi and Pune
          </h2>
          <p className="text-lg text-[#B0C4CF] max-w-3xl mx-auto">
            We don’t just sell services — we design a growth pathway tailored for businesses in Pune and PCMC.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">

          {/* Connection Line */}
          <div
            className="hidden lg:block absolute top-[110px] left-0 right-0 h-px 
            bg-gradient-to-r from-transparent via-[#35B6D9]/60 to-transparent"
            style={{ width: '80%', margin: '0 10%' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="
                    w-20 h-20 mx-auto
                    bg-gradient-to-br from-[#35B6D9] to-[#1FB6A6]
                    rounded-full flex items-center justify-center
                    shadow-lg relative z-10
                  ">
                    <span className="text-2xl font-bold text-black">
                      {step.number}
                    </span>
                  </div>
                  <div className="
                    absolute inset-0 w-20 h-20 mx-auto
                    bg-[#35B6D9]/40
                    rounded-full blur-xl
                  " />
                </div>

                {/* Icon */}
                <div className="
                  w-16 h-16 mx-auto mb-5
                  bg-white/10 backdrop-blur
                  border border-white/10
                  rounded-xl flex items-center justify-center
                ">
                  <step.icon className="w-8 h-8 text-[#35B6D9]" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-[#C7D2DA] leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Process
