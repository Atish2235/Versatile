import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiShoppingCart } from 'react-icons/fi'
import Container from '@components/ui/Container'

const navigation = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    hasDropdown: true,
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Testimonials', path: '/about#testimonials' },
    ],
  },
  {
    name: 'Pages',
    path: '/services',
    hasDropdown: true,
    children: [
      { name: 'Services', path: '/services' },
      { name: 'Projects', path: '/projects' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Team', path: '/team' },
    ],
  },
  {
    name: 'Shop',
    path: '/shop',
    hasDropdown: true,
    children: [
      { name: 'Products', path: '/shop' },
      { name: 'Cart', path: '/cart' },
      { name: 'Checkout', path: '/checkout' },
    ],
  },
  {
    name: 'Blog',
    path: '/blog',
    hasDropdown: true,
    children: [
      { name: 'Blog Grid', path: '/blog' },
      { name: 'Blog Details', path: '/blog/future-of-web-development' },
    ],
  },
  { name: 'Contact', path: '/contact' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [cartCount] = useState(2)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1A1C22]/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-[#1A1C22]/40 backdrop-blur-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="relative z-10 px-0 md:px-1">
            <img
              src="/versatileLogo1.png"
              alt="Versatile Logo"
              className="h-14 w-auto opacity-95"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[15px] font-medium flex items-center gap-1 py-2 transition-colors ${
                      isActive
                        ? 'text-[#3DB7E4]'
                        : 'text-[#E5E7EB] hover:text-[#3DB7E4]'
                    }`
                  }
                >
                  {item.name}
                  {item.hasDropdown && (
                    <FiChevronDown
                      size={13}
                      className={`transition-transform ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3DB7E4] group-hover:w-full transition-all duration-300" />
                </NavLink>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-xl bg-[#1A1C22]/90 backdrop-blur-md border border-white/10 shadow-xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-5 py-2.5 text-sm text-[#C9D3DC] hover:text-[#3DB7E4] hover:bg-white/5 transition"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/cart" className="relative p-2">
              <FiShoppingCart className="text-[#E5E7EB] hover:text-[#3DB7E4]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F6BC3D] text-[#0E0F12] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="px-5 py-2.5 text-[13px] font-semibold text-[#E5E7EB] border border-white/20 rounded-md hover:border-[#F6BC3D] hover:text-[#F6BC3D] transition">
              SUPPORT
            </button>

            <Link
              to="/login"
              className="px-6 py-2.5 bg-[#F6BC3D] hover:bg-[#E5AB2C] text-[#0E0F12] text-[13px] font-semibold rounded-md transition shadow-sm"
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#E5E7EB] hover:text-[#3DB7E4]"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1A1C22]/95 backdrop-blur-md border-t border-white/10"
          >
            <Container>
              <div className="py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-[#E5E7EB] hover:text-[#3DB7E4]"
                    >
                      {item.name}
                    </NavLink>
                    {item.hasDropdown && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-[#C9D3DC] hover:text-[#F6BC3D]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
