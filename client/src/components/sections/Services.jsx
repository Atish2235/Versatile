import React from 'react'
import { motion } from 'framer-motion'
import {
  FiSearch,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiShoppingCart,
  FiPenTool,
} from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

/**
 * PDF SEO CONTENT — SERVICES (HOME PAGE VERSION)
 */
const pdfServices = [
  {
    icon: FiSearch,
    title: 'Search Engine Optimisation (SEO)',
    description:
      'Your website exists — but Google barely knows it. We optimise your website structure, content, and local signals so your brand appears first when customers search in Pune, PCMC, or Akurdi.',
    features: [
      'Local SEO for Pune & PCMC',
      'On-page & technical SEO',
      'Google Business Profile optimisation',
    ],
  },
  {
    icon: FiUsers,
    title: 'Social Media Marketing (SMM)',
    description:
      'Your posts get likes, but no business. We design social campaigns with clear conversion paths and target audiences in Pune and PCMC who are ready to buy.',
    features: [
      'Lead-focused campaigns',
      'Paid social ads',
      'Audience targeting (Pune/PCMC)',
    ],
  },
  {
    icon: FiTrendingUp,
    title: 'Social Media Optimisation (SMO)',
    description:
      'Your brand profile is unoptimised and hidden. We optimise profiles, content cadence, hashtags, and localisation so you surface when prospects search for digital marketing services in Pune.',
    features: [
      'Profile optimisation',
      'Local hashtag strategy',
      'Content & cadence planning',
    ],
  },
  {
    icon: FiGlobe,
    title: 'Website Development',
    description:
      'You may have a website, but it doesn’t convert, loads slowly, or reflect your brand’s quality. We build high-performance websites that act as your 24/7 salesperson.',
    features: [
      'WordPress & custom websites',
      'E-commerce (WooCommerce / Shopify)',
      'React & PHP custom builds',
    ],
  },
  {
    icon: FiShoppingCart,
    title: 'Google Ads (PPC / AdWords)',
    description:
      'Running ads but paying too much for poor-quality leads? We target high-intent searchers in Pune and PCMC and continuously refine campaigns to reduce cost per lead.',
    features: [
      'Search & display ads',
      'Conversion tracking',
      'Cost-per-lead optimisation',
    ],
  },
  {
    icon: FiPenTool,
    title: 'Designing & Branding',
    description:
      'Without strong design, trust drops — especially in a competitive market like Pune. We create visuals that build credibility and drive enquiries.',
    features: [
      'Logo & brand identity',
      'Social & ad creatives',
      'Video & motion graphics',
    ],
  },
]

const Services = ({ services = pdfServices }) => {
  return (
    <section className="section-padding bg-gradient-to-b from-[#0E1E26] via-[#102F3D] to-[#0E1E26]">
      <Container>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            What Digital Marketing Services Do We Offer in Pune?
          </h2>
          <p className="text-lg text-[#B0C4CF] max-w-3xl mx-auto">
            We don’t offer random services. Each solution is designed to solve specific business challenges faced by companies in Pune, PCMC, and Akurdi.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full flex flex-col justify-between p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-cyan-500/30">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-[#35B6D9]/10">
                  <service.icon className="w-8 h-8 text-[#35B6D9]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#C7D2DA] mb-4 flex-1 leading-relaxed text-justify">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-[#B0C4CF] text-justify"
                    >
                      <span className="w-1.5 h-1.5 bg-[#F5C144] rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full border border-[#35B6D9] text-[#35B6D9] hover:bg-[#35B6D9] hover:text-black transition-all duration-300"
                >
                  Learn More
                </Button>

              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Services
