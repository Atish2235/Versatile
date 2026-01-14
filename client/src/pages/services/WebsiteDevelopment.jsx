import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaCheck, FaPhone, FaCode, FaServer, FaDatabase } from 'react-icons/fa'

function WebsiteDevelopment() {
  const features = [
    'Custom Website Design & Development',
    'E-commerce Solutions',
    'Progressive Web Apps (PWA)',
    'Content Management Systems (CMS)',
    'API Development & Integration',
    'Performance Optimization',
    'SEO-Friendly Architecture',
    'Cross-Browser Compatibility'
  ]

  const technologies = ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify', 'MongoDB', 'PostgreSQL']

  const process = [
    { step: 1, title: 'Discovery', desc: 'Understanding your requirements, goals, and target audience' },
    { step: 2, title: 'Planning', desc: 'Creating wireframes, sitemaps, and technical specifications' },
    { step: 3, title: 'Design', desc: 'Crafting beautiful, responsive UI/UX designs' },
    { step: 4, title: 'Development', desc: 'Building your website with clean, maintainable code' },
    { step: 5, title: 'Testing', desc: 'Rigorous quality assurance across devices and browsers' },
    { step: 6, title: 'Launch', desc: 'Deploying to production and going live' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
          <div className="flex items-center mb-4">
            <FaCode className="text-5xl mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">
              Web Development
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Building Modern, Scalable Web Solutions for Your Business
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Transform Your Digital Presence</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6" data-aos="fade-up">
              We create responsive, high-performance websites and web applications tailored to your business needs. Our team leverages the latest technologies to deliver exceptional digital experiences that engage users and drive conversions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up">
              From simple landing pages to complex enterprise applications, we have the expertise to bring your vision to life. Our development process ensures scalability, security, and maintainability for long-term success.
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
                <FaCheck className="text-green-500 mb-3" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Technologies We Use</h2>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Ready to Build Your Website?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Let's discuss how we can help you create an amazing web presence.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-aos="fade-up" data-aos-delay="200">
            <FaPhone className="mr-2" /> Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
