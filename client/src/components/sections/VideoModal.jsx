import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiX } from 'react-icons/fi'
import Modal from '@components/ui/Modal'
import Container from '@components/ui/Container'

const VideoModal = ({ 
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnailImage = 'https://picsum.photos/seed/video/1200/600',
  title = 'Watch Our Story',
  subtitle = 'See how we transform ideas into reality'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {/* SECTION */}
      <section className="section-padding bg-[#102E3A]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">{title}</h2>
            <p className="text-lg text-[#B0C4CF] max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* VIDEO THUMBNAIL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={thumbnailImage}
              alt="Video thumbnail"
              className="w-full rounded-3xl shadow-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-3xl" />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-[#35B6D9] transition-colors"
              >
                <FiPlay
                  size={40}
                  className="text-[#35B6D9] group-hover:text-black ml-2 transition-colors"
                />
              </motion.div>
            </div>

            {/* PULSE */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 bg-white rounded-full animate-ping opacity-20" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
      >
        <div className="relative">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-4 -right-4 z-20
              w-10 h-10 rounded-full
              bg-black/80 backdrop-blur
              border border-white/10
              flex items-center justify-center
              text-white
              hover:bg-[#35B6D9] hover:text-black
              transition-all"
            aria-label="Close video modal"
          >
            <FiX size={18} />
          </button>

          {/* VIDEO */}
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src={videoUrl}
              title="Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default VideoModal
