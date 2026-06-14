import { render, screen } from '@testing-library/react'
import Experience from '@/components/Experience'
import { experience } from '@/data/content'
import '@testing-library/jest-dom'

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { name: /^Work$/i })).toBeInTheDocument()
  })

  it('renders all company names', () => {
    render(<Experience />)
    expect(screen.getAllByText(/CEAVI/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Espacio Político/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Secretaría de Economía/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders all job roles', () => {
    render(<Experience />)
    experience.forEach(job => {
      expect(screen.getAllByText(job.role).length).toBeGreaterThan(0)
    })
  })

  it('renders all periods', () => {
    render(<Experience />)
    experience.forEach(job => {
      expect(screen.getAllByText(job.period).length).toBeGreaterThan(0)
    })
  })

  it('renders job descriptions', () => {
    render(<Experience />)
    experience.forEach(job => {
      expect(screen.getAllByText(job.description).length).toBeGreaterThan(0)
    })
  })

  it('renders at least one achievement per job', () => {
    render(<Experience />)
    experience.forEach(job => {
      expect(screen.getAllByText(job.achievements[0]).length).toBeGreaterThan(0)
    })
  })

  it('renders the correct number of jobs', () => {
    render(<Experience />)
    expect(experience.length).toBe(5)
  })
})
