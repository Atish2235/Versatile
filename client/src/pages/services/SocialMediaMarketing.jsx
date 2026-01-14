import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck, FaPhone, FaBullhorn } from 'react-icons/fa'

function SocialMediaMarketing() {
  const features = [
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click Advertising (PPC)',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Analytics & Reporting',
    'Conversion Rate Optimization',
    'Influencer Marketing'
  ]

  const technologies = ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Ahrefs']

  const process = [
    { step: 1, title: 'Audit', desc: 'Analyzing your current digital presence and performance' },
    { step: 2, title: 'Strategy', desc: 'Developing a comprehensive marketing plan' },
    { step: 3, title: 'Setup', desc: 'Configuring campaigns and tracking' },
    { step: 4, title: 'Execute', desc: 'Launching and managing campaigns' },
    { step: 5, title: 'Monitor', desc: 'Real-time performance tracking' },
    { step: 6, title: 'Optimize', desc: 'Continuous improvement and scaling' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
          <div className="flex items-center mb-4">
            <FaBullhorn className="text-5xl mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">
              Digital Marketing
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Grow Your Online Presence and Reach Your Target Audience
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Drive Growth with Data-Driven Marketing</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6" data-aos="fade-up">
              Boost your brand visibility and reach your target audience with our comprehensive digital marketing services. We create data-driven strategies that deliver measurable results and maximize your ROI.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up">
              From SEO and PPC to social media and content marketing, we provide end-to-end solutions that help you connect with customers at every stage of their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 50}>
                <FaCheck className="text-orange-500 mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Marketing Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Platforms We Use</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white px-6 py-3 rounded-full shadow-md text-gray-700 font-medium" data-aos="zoom-in" data-aos-delay={index * 50}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Ready to Grow Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Let's create a marketing strategy that delivers results.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-aos="fade-up" data-aos-delay="200">
            <FaPhone className="mr-2" /> Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SocialMediaMarketing
