import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@components/ui/Container'
import Button from '@components/ui/Button'

const categories = ['All', 'SEO', 'Google Ads', 'Social Media', 'Website']

/**
 * PDF RESULT-BASED PORTFOLIO CONTENT
 */
const pdfProjects = [
  {
    id: 1,
    title: 'Retail Outlet – Akurdi',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/akurdi-retail/600/400',
    description: 'Increased in-store visits by 170% within 4 months using local social media campaigns.',
  },
  {
    id: 2,
    title: 'Manufacturing Company – PCMC',
    category: 'Google Ads',
    image: 'https://picsum.photos/seed/pcmc-manufacturing/600/400',
    description: 'Reduced cost per lead from ₹280 to ₹95 in just 3 months through optimised PPC campaigns.',
  },
  {
    id: 3,
    title: 'Local Service Business – Pune',
    category: 'SEO',
    image: 'https://picsum.photos/seed/pune-seo/600/400',
    description: 'Achieved first-page Google rankings for high-intent keywords related to digital marketing services in Pune.',
  },
  {
    id: 4,
    title: 'Clinic Website – Pimpri',
    category: 'Website',
    image: 'https://picsum.photos/seed/pimpri-clinic/600/400',
    description: 'Built a conversion-focused website integrated with local SEO and lead tracking.',
  },
  {
    id: 5,
    title: 'Retail Brand – PCMC',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/pcmc-retail/600/400',
    description: 'Generated consistent enquiries through optimised social media content and local targeting.',
  },
  {
    id: 6,
    title: 'Service Provider – Pune',
    category: 'SEO',
    image: 'https://picsum.photos/seed/pune-service/600/400',
    description: 'Improved organic visibility and lead quality using SEO and Google Business Profile optimisation.',
  },
]

const Portfolio = ({ projects = pdfProjects }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory)

  return (
    <section className="section-padding bg-white">
      <Container>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            Real Results Delivered for Businesses in Pune & PCMC
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            We don’t just talk about growth — we deliver measurable outcomes for local businesses across Akurdi, PCMC, and Pune.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary-300 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button to="/projects" variant="outline" size="lg">
            View More Case Studies
          </Button>
        </motion.div>

      </Container>
    </section>
  )
}

export default Portfolio
