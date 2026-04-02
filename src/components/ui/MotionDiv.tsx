'use client'

import { motion, HTMLMotionProps } from 'framer-motion'

const MotionDiv = (props: HTMLMotionProps<'div'>): JSX.Element => <motion.div {...props} />

export default MotionDiv
