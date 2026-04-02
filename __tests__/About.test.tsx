
import { render, screen } from '@testing-library/react'
import About from '@/components/About'
import { education, certifications } from '@/data/content'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument()
  })

  it('renders the bio text', () => {
    render(<About />)
    expect(screen.getByText(/production systems/i)).toBeInTheDocument()
  })

  it('renders all education entries', () => {
    render(<About />)
    education.forEach(edu => {
      expect(screen.getByText(edu.school)).toBeInTheDocument()
      expect(screen.getByText(edu.degree)).toBeInTheDocument()
    })
  })

  it('renders all certifications', () => {
    render(<About />)
    certifications.forEach(cert => {
      expect(screen.getByText(cert)).toBeInTheDocument()
    })
  })
})
