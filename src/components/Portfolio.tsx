import { projects } from '@/data/content'
import SpotlightCard from '@/components/ui/SpotlightCard'

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding border-t border-neutral-900">
      <div className="container-custom">
        <h2 className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
