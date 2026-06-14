import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'
import '@testing-library/jest-dom'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /^Contact$/i })).toBeInTheDocument()
  })

  it('renders the email as a mailto link', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /bmichelcano@gmail.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:bmichelcano@gmail.com')
  })

  it('renders LinkedIn and GitHub plain text links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /^LinkedIn$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^GitHub$/i })).toBeInTheDocument()
  })

  it('does not render the template CTA copy', () => {
    render(<Contact />)
    expect(screen.queryByText(/Ready to build something scalable/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Get in Touch/i)).not.toBeInTheDocument()
  })
})
