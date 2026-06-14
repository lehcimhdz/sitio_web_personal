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
      className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-neutral-700 transition-colors duration-300"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUp size={20} />
    </motion.button>
  )
}

export default ScrollTopButton
