import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  Target
} from 'react-feather'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'

const defaultFeatures = [
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Lightning-fast load times and optimized performance for the best user experience.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security measures to protect your data and ensure reliability.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business, from startup to enterprise scale.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with experienced professionals dedicated to your success.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized excellence in design, development, and customer satisfaction.',
  },
  {
    icon: Target,
    title: 'Goal Focused',
    description: 'Strategic approach aligned with your business objectives and KPIs.',
  },
]

const Features = ({ features = defaultFeatures, title = 'Why Choose Us', subtitle = 'We deliver exceptional value through our core competencies' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
    // refresh AOS when features change
    AOS.refresh()
  }, [])

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="group cursor-pointer"
            >
              <Card className="h-full relative overflow-hidden transform transition-transform transition-shadow duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Blue gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl z-10 pointer-events-none bg-gradient-to-br from-blue-400/40 to-blue-600/30" />
                <div className="relative z-20">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features
