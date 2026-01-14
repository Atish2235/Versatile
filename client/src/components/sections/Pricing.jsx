import React from 'react'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'
import Button from '@components/ui/Button'

/**
 * PDF PRICING PHILOSOPHY — CUSTOM, NOT FIXED
 */
const pdfPlans = [
  {
    name: 'Starter Growth Plan',
    description:
      'For small businesses and startups in Pune & PCMC looking to build visibility and start generating enquiries.',
    features: [
      'Local SEO setup',
      'Social media optimisation',
      'Basic Google Ads support',
      'Monthly performance reports',
      'Dedicated account support',
    ],
    popular: false,
  },
  {
    name: 'Business Growth Plan',
    description:
      'For growing businesses that want consistent leads, better ROI, and stronger brand presence.',
    features: [
      'Advanced SEO & local search optimisation',
      'Google Ads & social media campaigns',
      'Conversion-focused landing pages',
      'Lead tracking & optimisation',
      'Transparent monthly reporting',
    ],
    popular: true,
  },
  {
    name: 'Custom Scale Plan',
    description:
      'For established businesses ready to scale aggressively across Pune, PCMC, and beyond.',
    features: [
      'End-to-end digital strategy',
      'High-intent paid campaigns',
      'Website optimisation & CRO',
      'Branding & creative support',
      'Performance-driven growth roadmap',
    ],
    popular: false,
  },
]

const Pricing = ({ plans = pdfPlans }) => {
  return (
    <section className="section-padding bg-[#F5F7FA]">
      <Container>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-neutral-900">
            How Much Does Digital Marketing Cost in Pune?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            The cost isn’t the same for everyone. It depends on your business, your competition, and the results you want.
            We create custom plans that fit your budget — no unnecessary extras, no hidden charges.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <Card
                className={`h-full flex flex-col p-8 bg-white rounded-2xl shadow-lg transition-all duration-500
                ${plan.popular ? 'ring-2 ring-[#35B6D9] scale-[1.02]' : 'hover:shadow-xl'}`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheck className="w-5 h-5 text-[#35B6D9] mr-3 mt-0.5" />
                      <span className="text-neutral-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get a Custom Quote
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Pricing
