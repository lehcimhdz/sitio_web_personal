'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className="p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 text-blue-400 hover:text-white transition-colors duration-300"
      whileHover={{ y: -3, boxShadow: '0 5px 15px rgba(59, 130, 246, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUp size={20} />
    </motion.button>
  )
}

export default ScrollTopButton
