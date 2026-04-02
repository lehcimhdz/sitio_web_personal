
import { render, screen } from '@testing-library/react'
import Skills from '@/components/Skills'
import { skills } from '@/data/content'

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /Technical Expertise/i })).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    skills.forEach(group => {
      expect(screen.getByText(group.category)).toBeInTheDocument()
    })
  })

  it('renders skill items for each category', () => {
    render(<Skills />)
    skills.forEach(group => {
      group.items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })
  })
})
