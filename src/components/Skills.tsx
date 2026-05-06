import { skills } from '@/data/content'
import { Database, Server, Code, Layout } from 'lucide-react'
import MotionDiv from '@/components/ui/MotionDiv'
import { fadeUp, staggerDelay } from '@/lib/animationConfig'

const getIcon = (category: string) => {
  switch (category) {
    case 'Backend': return <Code size={24} className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300" />
    case 'Data Engineering': return <Database size={24} className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300" />
    case 'Cloud & Infrastructure': return <Server size={24} className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300" />
    case 'Frontend & Testing': return <Layout size={24} className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300" />
    default: return <Code size={24} className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300" />
  }
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-900 border-y border-slate-800">
      <div className="container-custom">
        <MotionDiv {...fadeUp()} className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-400">
            A focused stack built for reliability and scale.
            From low-level system design to user-facing interfaces.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <MotionDiv
              key={index}
              {...fadeUp(staggerDelay(index))}
              className="group card bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-amber-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-900 text-slate-300 border border-slate-700 rounded-md hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                  >
                    {item}
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

export default Skills
