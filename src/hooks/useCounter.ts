'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useTransform, animate, MotionValue } from 'framer-motion'

interface UseCounterOptions {
  from?: number
  to: number
  duration?: number
  delay?: number
}

interface UseCounterReturn {
  ref: React.RefObject<HTMLDivElement | null>
  display: MotionValue<string>
}

const useCounter = ({
  from = 0,
  to,
  duration = 1.8,
  delay = 0,
}: UseCounterOptions): UseCounterReturn => {
  const ref = useRef<HTMLDivElement | null>(null)
  const count = useMotionValue(from)
  const display = useTransform(count, (value) => Math.round(value).toString())

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(count, to, {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [count, to, duration, delay])

  return { ref, display }
}

export default useCounter
