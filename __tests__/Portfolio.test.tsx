import { render, screen } from '@testing-library/react'
import Portfolio from '@/components/Portfolio'
import { projects } from '@/data/content'
import '@testing-library/jest-dom'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /^Projects$/i })).toBeInTheDocument()
  })

  it('renders all project titles', () => {
    render(<Portfolio />)
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })

  it('renders all project descriptions', () => {
    render(<Portfolio />)
    projects.forEach(project => {
      expect(screen.getByText(project.description)).toBeInTheDocument()
    })
  })

  it('renders an external link per project', () => {
    render(<Portfolio />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(projects.length)
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders tags as dot-separated mono text without hashtags', () => {
    render(<Portfolio />)
    expect(screen.queryAllByText(/^#/).length).toBe(0)
    const firstProjectTags = projects[0].tags.join(' · ')
    expect(screen.getByText(firstProjectTags)).toBeInTheDocument()
  })
})
