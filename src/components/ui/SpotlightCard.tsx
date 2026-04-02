'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { scaleIn, staggerDelay } from '@/lib/animationConfig'

interface SpotlightCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  index: number
}

const SpotlightCard = ({ title, description, tags, link, index }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setSpotlight({ x, y, opacity: 1 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }))
  }, [])

  return (
    <motion.div
      ref={cardRef}
      {...scaleIn(staggerDelay(index))}
      className="group card relative flex flex-col h-full bg-slate-900/50 hover:bg-slate-800 border-slate-800 hover:border-amber-500/40 overflow-hidden cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[0.75rem] transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(
            350px circle at ${spotlight.x}% ${spotlight.y}%,
            rgba(59, 130, 246, 0.12),
            transparent 70%
          )`,
        }}
      />

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
          <FolderGit2 size={24} />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-amber-400 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowUpRight size={24} />
        </a>
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors relative z-10">
        {title}
      </h3>

      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="text-xs font-mono text-blue-400/80">
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SpotlightCard
