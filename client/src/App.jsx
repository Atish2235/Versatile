import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import About from '@pages/About'
import Services from '@pages/Services'

/* REAL SERVICE PAGES */
import GoogleAds from '@pages/services/GoogleAds'
import WebsiteDevelopment from '@pages/services/WebsiteDevelopment'
import SocialMediaMarketing from '@pages/services/SocialMediaMarketing'
import GraphicDesigning from '@pages/services/GraphicDesigning'

/* OTHER PAGES */
import Projects from '@pages/Projects'
import Blog from '@pages/Blog'
import BlogPost from '@pages/BlogPost'
import Contact from '@pages/Contact'
import Shop from '@pages/Shop'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh()
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Core Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />

        {/* Service Pages (ONLY THESE) */}
        <Route path="services/google-ads" element={<GoogleAds />} />
        <Route path="services/website-development" element={<WebsiteDevelopment />} />
        <Route path="services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="services/graphic-designing" element={<GraphicDesigning />} />

        {/* Other Pages */}
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App
