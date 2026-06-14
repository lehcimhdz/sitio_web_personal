import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('renders the copyright notice with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/Michel Cano Hernández/)).toBeInTheDocument()
  })

  it('does not render the built-with stack disclaimer', () => {
    render(<Footer />)
    expect(screen.queryByText(/Built with Next\.js/)).not.toBeInTheDocument()
  })

  it('renders the scroll-to-top button', () => {
    render(<Footer />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
