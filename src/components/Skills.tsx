import { skills } from '@/data/content'

const Skills = () => {
  return (
    <section id="skills" className="section-padding border-t border-neutral-900">
      <div className="container-custom">
        <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 mb-10">
          Stack
        </h2>

        <div className="space-y-6 max-w-3xl">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-x-8 gap-y-2"
            >
              <h3 className="text-sm font-medium text-neutral-300">
                {group.category}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {group.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
