import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Users,
  Target,
  Zap,
  Shield,
} from 'react-feather'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'

/**
 * PDF SEO CONTENT — PAIN POINTS (USED AS-IS)
 */
const pdfFeatures = [
  {
    icon: TrendingUp,
    title: 'Leads Have Flatlined',
    description:
      'You’ve invested in digital marketing, but your leads have flatlined and growth has stalled.',
  },
  {
    icon: Target,
    title: 'Website Visitors Don’t Convert',
    description:
      'Your website looks fine — yet visitors don’t convert into enquiries or customers.',
  },
  {
    icon: Users,
    title: 'Social Media Without Customers',
    description:
      'Your social media seems active, yet you’re not winning real customers or enquiries.',
  },
  {
    icon: Zap,
    title: 'Ads Spend With No Visible ROI',
    description:
      'You’re spending on ads, but the ROI remains invisible and the quality of leads is poor.',
  },
  {
    icon: Shield,
    title: 'Need a Local Pune / PCMC Partner',
    description:
      'You’re in Akurdi / PCMC / Pune and need a local digital marketing partner who understands your market.',
  },
]

const Features = ({
  features = pdfFeatures,
  title = 'Why Is Your Digital Marketing Failing to Bring You Real Results in Pune?',
  subtitle = 'You came here because something isn’t working — and these are the exact problems we solve at Versatile Advertising.'
}) => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <section className="section-padding bg-[#0E1E26]">
      <Container>

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-[#B0C4CF] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* PAIN POINT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <Card className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-cyan-500/30">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-[#C7D2DA] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Features
