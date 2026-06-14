import MotionDiv from '@/components/ui/MotionDiv'
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import { fadeUp, fadeIn } from '@/lib/animationConfig'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-8 border-t border-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <MotionDiv {...fadeUp()}>
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} Michel Cano Hernández. All rights reserved.
            </p>
          </MotionDiv>

          <MotionDiv {...fadeUp(0.2)} className="mt-4 md:mt-0 flex items-center gap-6">
            <ScrollTopButton />
          </MotionDiv>
        </div>

        <MotionDiv {...fadeIn(0.4)} className="mt-8 pt-6 border-t border-neutral-900 text-center">
          <p className="text-neutral-500 text-xs">
            Built with Next.js, React, Tailwind CSS, and Framer Motion
          </p>
        </MotionDiv>
      </div>
    </footer>
  )
}

export default Footer
