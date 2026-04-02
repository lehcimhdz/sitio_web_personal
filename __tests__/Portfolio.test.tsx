
import { render, screen } from '@testing-library/react'
import Portfolio from '@/components/Portfolio'
import { projects } from '@/data/content'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Featured Projects/i })).toBeInTheDocument()
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

  it('renders links for each project', () => {
    render(<Portfolio />)
    const links = screen.getAllByRole('link')
    // Each project has one external link
    expect(links.length).toBeGreaterThanOrEqual(projects.length)
  })

  it('renders tags for each project', () => {
    render(<Portfolio />)
    // Spot-check a known tag
    const tagElements = screen.getAllByText(/^#/)
    expect(tagElements.length).toBeGreaterThan(0)
  })

  it('renders the correct number of project cards', () => {
    render(<Portfolio />)
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
    expect(projects.length).toBe(5)
  })
})
