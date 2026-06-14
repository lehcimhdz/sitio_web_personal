
import { personalInfo, education, certifications } from '@/data/content'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import MotionDiv from '@/components/ui/MotionDiv'
import { fadeLeft, fadeRight } from '@/lib/animationConfig'

const About = () => {
  return (
    <section id="about" className="section-padding bg-neutral-950/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Column */}
          <MotionDiv {...fadeLeft()}>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="prose prose-invert prose-lg text-neutral-400">
              <p>{personalInfo.bio}</p>
            </div>
          </MotionDiv>

          {/* Education & Certifications Column */}
          <MotionDiv {...fadeRight(0.2)} className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-200">
                <GraduationCap className="text-amber-300" size={20} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="card p-4 hover:bg-neutral-900/80 transition-colors">
                    <h4 className="font-semibold text-neutral-100">{edu.school}</h4>
                    <p className="text-sm text-amber-300">{edu.degree}</p>
                    <p className="text-xs text-neutral-500 mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-200">
                <Award className="text-amber-300" size={20} />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300"
                  >
                    <BookOpen size={14} className="text-amber-300" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}

export default About
