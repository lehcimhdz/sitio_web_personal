
import { experience } from '@/data/content'
import { Calendar, Building2, Briefcase } from 'lucide-react'
import MotionDiv from '@/components/ui/MotionDiv'
import { fadeUp, staggerDelay } from '@/lib/animationConfig'

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-slate-900/50">
            <div className="container-custom">
                <MotionDiv {...fadeUp()} className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full" />
                </MotionDiv>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <MotionDiv
                            key={index}
                            {...fadeUp(staggerDelay(index))}
                            className="relative"
                        >
                            {/* Grid Layout for Desktop */}
                            <div className="hidden md:grid md:grid-cols-[320px_auto_1fr] gap-8 items-start">

                                {/* 1. Period & Company (Left Side) */}
                                <div className="text-right pt-2">
                                    <div className="text-slate-400 font-mono text-sm mb-2 flex items-center justify-end gap-2">
                                        {job.period}
                                        <Calendar size={14} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-200 flex items-center justify-end gap-2">
                                        {job.company}
                                        <Building2 size={16} className="text-blue-500 shrink-0" />
                                    </h3>
                                </div>

                                {/* 2. Timeline Line & Dot (Center) */}
                                <div className="relative flex justify-center h-full min-h-[150px]">
                                    <div className="absolute top-0 bottom-[-48px] w-px bg-slate-800" />
                                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10 mt-2.5 relative" />
                                </div>

                                {/* 3. Content Card (Right Side) */}
                                <div className="card hover:border-slate-700/50 transition-colors">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Briefcase size={18} className="text-blue-400" />
                                        <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                                    </div>

                                    <p className="text-slate-400 mb-6 italic">
                                        {job.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {job.achievements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Mobile Layout (Stacked) */}
                            <div className="md:hidden relative pl-8 border-l border-slate-800 ml-3">
                                <div className="absolute -left-[5px] top-0 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-900" />

                                <div className="mb-6">
                                    <div className="text-slate-400 font-mono text-xs mb-1 flex items-center gap-2">
                                        <Calendar size={12} />
                                        {job.period}
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-200 mb-2">
                                        {job.company}
                                    </h3>

                                    <div className="card mt-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Briefcase size={16} className="text-blue-400" />
                                            <h4 className="text-lg font-bold text-slate-100">{job.role}</h4>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-4 italic">
                                            {job.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {job.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300 text-xs">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
