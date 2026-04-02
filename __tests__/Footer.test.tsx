
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders the copyright notice with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/Michel Cano Hernández/)).toBeInTheDocument()
  })

  it('renders the built-with credit', () => {
    render(<Footer />)
    expect(screen.getByText(/Built with Next\.js/)).toBeInTheDocument()
  })

  it('renders the scroll-to-top button', () => {
    render(<Footer />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
