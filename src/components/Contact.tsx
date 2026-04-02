
import { personalInfo } from '@/data/content'
import { Mail, Linkedin, Github } from 'lucide-react'
import MotionDiv from '@/components/ui/MotionDiv'

const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="section-padding border-t border-slate-800">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
            Ready to build something scalable?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            I'm currently open to new opportunities as a Backend Developer or Full-Stack Engineer.
          </p>

          <a
            href="mailto:bmichelcano@gmail.com"
            className="btn-primary text-lg px-8 py-4 mb-12 inline-flex items-center gap-3"
          >
            <Mail size={20} />
            Get in Touch
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500 border-t border-slate-800/50 pt-12">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              <span className="font-medium">Check my Code</span>
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

export default Contact
