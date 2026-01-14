import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Container from '@components/ui/Container'
import Card from '@components/ui/Card'

/**
 * PDF-ALIGNED LOCAL TESTIMONIALS
 */
const testimonials = [
  {
    name: 'Retail Business Owner',
    role: 'Akurdi, PCMC',
    image: 'https://i.pravatar.cc/150?img=11',
    content:
      'We were active on social media but not getting customers. Versatile Advertising helped us attract local footfall and our in-store visits increased significantly within a few months.',
    rating: 5,
  },
  {
    name: 'Manufacturing Services Head',
    role: 'PCMC',
    image: 'https://i.pravatar.cc/150?img=12',
    content:
      'Our Google Ads were costing too much with poor-quality leads. Their team optimised our campaigns and reduced our cost per lead while improving enquiry quality.',
    rating: 5,
  },
  {
    name: 'Clinic Owner',
    role: 'Pune',
    image: 'https://i.pravatar.cc/150?img=13',
    content:
      'Versatile Advertising understands the local Pune market. From website improvements to local SEO, everything was aligned to generate real enquiries, not just traffic.',
    rating: 5,
  },
  {
    name: 'Service Business Founder',
    role: 'PCMC – Pune',
    image: 'https://i.pravatar.cc/150?img=14',
    content:
      'What we liked most was transparency. We received clear reports and could see exactly where our marketing budget was going and what results it delivered.',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-[#0E1E26] to-[#123747]">
      <Container>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            What Businesses in Pune & PCMC Say About Us
          </h2>
          <p className="text-[#B0C4CF] max-w-3xl mx-auto">
            Real feedback from local businesses we’ve helped grow with SEO, Google Ads, social media marketing, and high-converting websites.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 rounded-xl">
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <span key={idx} className="text-[#F5C144] text-lg">★</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#E5E7EB] italic mb-6 leading-relaxed">
                  “{t.content}”
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-white/20"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-sm text-[#9CA3AF]">
                      {t.role}
                    </div>
                  </div>
                </div>

              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>
  )
}

export default Testimonials
