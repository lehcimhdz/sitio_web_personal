import MotionDiv from '@/components/ui/MotionDiv'
import ScrollTopButton from '@/components/ui/ScrollTopButton'

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Michel Cano Hernández. All rights reserved.
            </p>
          </MotionDiv>

          <MotionDiv
            className="mt-4 md:mt-0 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ScrollTopButton />
          </MotionDiv>
        </div>

        <MotionDiv
          className="mt-8 pt-6 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs">
            Built with Next.js, React, Tailwind CSS, and Framer Motion
          </p>
        </MotionDiv>
      </div>
    </footer>
  )
}

export default Footer
