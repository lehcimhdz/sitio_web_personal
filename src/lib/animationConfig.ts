const DURATION = 0.5
const STAGGER = 0.1
const viewport = { once: true }

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: DURATION, ...(delay ? { delay } : {}) },
  viewport,
})

export const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: DURATION, ...(delay ? { delay } : {}) },
  viewport,
})

export const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: DURATION, ...(delay ? { delay } : {}) },
  viewport,
})

export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: DURATION, ...(delay ? { delay } : {}) },
  viewport,
})

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: DURATION, ...(delay ? { delay } : {}) },
  viewport,
})

export const staggerDelay = (index: number) => index * STAGGER
