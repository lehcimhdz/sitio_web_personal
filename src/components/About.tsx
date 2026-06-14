import { personalInfo, education, certifications } from '@/data/content'

const About = () => {
  return (
    <section id="about" className="section-padding border-t border-neutral-900">
      <div className="container-custom">
        <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 mb-10">
          About
        </h2>

        <div className="grid md:grid-cols-[1fr_18rem] gap-x-12 gap-y-10 items-start max-w-4xl">
          <p className="text-base text-neutral-300 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                Education
              </h3>
              <ul className="space-y-3">
                {education.map((edu) => (
                  <li key={edu.school} className="text-sm">
                    <p className="text-neutral-200">{edu.degree}</p>
                    <p className="text-neutral-500">
                      {edu.school} · {edu.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                Certifications
              </h3>
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-neutral-400">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
