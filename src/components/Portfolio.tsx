
import { projects } from '@/data/content'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import MotionDiv from '@/components/ui/MotionDiv'
import { fadeUp, scaleIn, staggerDelay } from '@/lib/animationConfig'

const Portfolio = (): JSX.Element => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <MotionDiv {...fadeUp()} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              {...scaleIn(staggerDelay(index))}
              className="group card flex flex-col h-full bg-slate-900/50 hover:bg-slate-800 border-slate-800 hover:border-blue-500/30"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FolderGit2 size={24} />
                </div>
                <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                  <ArrowUpRight size={24} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-mono text-blue-400/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
