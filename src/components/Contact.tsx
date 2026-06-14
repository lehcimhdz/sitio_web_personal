import { personalInfo } from '@/data/content'

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-neutral-900">
      <div className="container-custom">
        <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 mb-6">
          Contact
        </h2>

        <p className="text-base text-neutral-300 leading-relaxed max-w-2xl mb-4">
          If you want to talk — about a role, a project, or something I wrote
          here — email is the fastest way.
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-neutral-200 hover:text-amber-300 transition-colors"
          >
            {personalInfo.email}
          </a>
          <span className="text-neutral-700">·</span>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
