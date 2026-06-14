import { experience } from '@/data/content'

const Experience = () => {
  return (
    <section id="experience" className="section-padding border-t border-neutral-900">
      <div className="container-custom">
        <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 mb-10">
          Work
        </h2>

        <div className="space-y-12 max-w-3xl">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-x-8 gap-y-3">
              <p className="text-xs font-mono text-neutral-500 pt-1">
                {job.period}
              </p>

              <div>
                <h3 className="text-base font-medium text-neutral-100">
                  {job.role}
                </h3>
                <p className="text-sm text-neutral-500 mb-4">
                  {job.company}
                </p>

                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-400 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
