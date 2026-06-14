
import { projects } from '@/data/content'
import MotionDiv from '@/components/ui/MotionDiv'
import { fadeUp } from '@/lib/animationConfig'
import SpotlightCard from '@/components/ui/SpotlightCard'

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <MotionDiv {...fadeUp()} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-amber-300 rounded-full" />
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
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
