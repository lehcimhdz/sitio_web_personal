import { ArrowUpRight } from 'lucide-react'

interface SpotlightCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  index: number
}

const SpotlightCard = ({ title, description, tags, link }: SpotlightCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full p-6 border border-neutral-800 rounded-md hover:border-neutral-700 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-medium text-neutral-100 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-neutral-600 group-hover:text-amber-300 transition-colors"
        />
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <p className="text-xs font-mono text-neutral-500 mt-auto leading-relaxed">
        {tags.join(' · ')}
      </p>
    </a>
  )
}

export default SpotlightCard
