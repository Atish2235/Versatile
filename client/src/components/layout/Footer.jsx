import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { FiArrowUp } from 'react-icons/fi'
import Container from '@components/ui/Container'

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Our Pricing', path: '/pricing' },
    { name: 'Latest News', path: '/blog' },
  ],
  support: [
    { name: "FAQ's", path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Condition', path: '/terms' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ],
}

const socialLinks = [
  { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:bg-[#3b5998]' },
  { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
  { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:bg-[#e4405f]' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0E0F12] text-[#C9D3DC] relative">
      {/* Main Footer Content */}
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <img 
                  src="/versatileLogo1.png" 
                  alt="Versatile Logo" 
                  className="h-14 w-auto brightness-110"
                />
              </Link>
              <p className="text-[#C9D3DC] leading-relaxed mb-6">
               Atish Shinde
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#C9D3DC] hover:text-[#F6BC3D] transition-colors inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6BC3D] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#C9D3DC] hover:text-[#F6BC3D] transition-colors inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F6BC3D] group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Address</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-[#3DB7E4] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C9D3DC]">
                    27 Division St, New York, NY 10002, USA
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="w-5 h-5 text-[#3DB7E4] flex-shrink-0 mt-0.5" />
                  <a href="mailto:spet@gmail.com" className="text-[#C9D3DC] hover:text-[#F6BC3D] transition-colors">
                    Email: spet@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FiPhone className="w-5 h-5 text-[#3DB7E4] flex-shrink-0 mt-0.5" />
                  <a href="tel:+13219847854" className="text-[#C9D3DC] hover:text-[#F6BC3D] transition-colors">
                    Phone: + (321) 984 754
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border-2 border-[#3DB7E4] flex items-center justify-center text-[#3DB7E4] hover:bg-[#3DB7E4] hover:text-white transition-all"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-[#3DB7E4]/20">
        <Container>
          <div className="py-6 flex items-center justify-center">
            <p className="text-[#C9D3DC] text-[15px]">
              © Website Design & Developed By Fox Aircomm Pvt Ltd | All Rights Reserved.
            </p>
          </div>
        </Container>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#3DB7E4] text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-[#2A9BC9] transition-all flex items-center justify-center group z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}

export default Footer
