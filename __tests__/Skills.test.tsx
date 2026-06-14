import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'
import { skills } from '@/data/content'
import '@testing-library/jest-dom'

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /^Stack$/i })).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    skills.forEach(group => {
      expect(screen.getByText(group.category)).toBeInTheDocument()
    })
  })

  it('renders skill items as a comma-separated string per category', () => {
    render(<Skills />)
    skills.forEach(group => {
      expect(screen.getByText(group.items.join(', '))).toBeInTheDocument()
    })
  })
})
