import React from 'react'
import { motion } from 'framer-motion'
import {
  FiBarChart,
  FiGlobe,
  FiUsers,
  FiPenTool,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import CTA from '@components/sections/CTA'

/**
 * ONLY SERVICES THAT EXIST IN PDF
 */
const services = [
  {
    icon: FiBarChart,
    title: 'Google Ads',
    description:
      'Running ads but not getting quality leads? We manage and optimise Google Ads campaigns focused on high-intent searches in Pune and PCMC.',
    features: [
      'Search & Display Ads',
      'Local keyword targeting',
      'Conversion tracking',
      'Cost-per-lead optimisation',
      'Transparent performance reporting',
    ],
    benefits:
      'Lower cost per lead, better enquiry quality, and measurable ROI.',
    slug: 'google-ads',
  },
  {
    icon: FiGlobe,
    title: 'Website Development',
    description:
      'Your website should generate enquiries, not just look good. We build fast, conversion-focused websites tailored for businesses in Pune and PCMC.',
    features: [
      'Business & service websites',
      'WordPress & custom development',
      'Conversion-focused UI',
      'SEO-ready structure',
      'Performance optimisation',
    ],
    benefits:
      'Websites that work as a 24/7 sales engine for your business.',
    slug: 'website-development',
  },
  {
    icon: FiUsers,
    title: 'Social Media Marketing',
    description:
      'Being active on social media isn’t enough. We run performance-driven social media campaigns that attract real customers, not just likes.',
    features: [
      'Facebook & Instagram marketing',
      'Paid social campaigns',
      'Local audience targeting',
      'Content planning & creatives',
      'Lead-focused strategy',
    ],
    benefits:
      'Consistent enquiries and brand visibility across Pune and PCMC.',
    slug: 'social-media-marketing',
  },
  {
    icon: FiPenTool,
    title: 'Graphic Designing & Branding',
    description:
      'Design is not decoration — it builds trust. We create professional visuals that strengthen your brand and improve conversion.',
    features: [
      'Brand identity & logo design',
      'Social media creatives',
      'Ad & campaign designs',
      'Marketing collaterals',
      'Consistent brand visuals',
    ],
    benefits:
      'Stronger brand recall and higher trust with your audience.',
    slug: 'graphic-designing',
  },
]

const Services = () => {
  return (
    <>
      {/* Services Hero */}
      <section
        className="section-padding"
        style={{
          background: 'radial-gradient(circle at top left, #3DB7E4, #0E0F12 65%)',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="mb-6 text-white">Our Services</h1>
            <p className="text-xl text-subheading">
              We offer focused digital marketing services designed to generate
              real business results for companies in Pune and PCMC.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#0E0F12]">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left */}
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3DB7E4] to-[#2A9BC9] rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="mb-4 text-white">{service.title}</h2>
                    <p className="text-lg text-subheading mb-6">
                      {service.description}
                    </p>

                    <div className="bg-[#14161C] border border-[#3DB7E4]/15 rounded-xl p-6 mb-6">
                      <p className="text-[#C9D3DC] font-medium">
                        {service.benefits}
                      </p>
                    </div>

                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
                    >
                      Learn More →
                    </Link>
                  </div>

                  {/* Right */}
                  <div>
                    <Card>
                      <h3 className="text-xl font-semibold mb-4 text-white">
                        What We Offer
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-6 h-6 bg-[#3DB7E4]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <span className="w-2 h-2 bg-[#3DB7E4] rounded-full" />
                            </span>
                            <span className="text-[#C9D3DC]">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  )
}

export default Services
