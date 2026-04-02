
import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact', () => {
  it('renders the main heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Ready to build something scalable/i })).toBeInTheDocument()
  })

  it('renders the email CTA link', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /Get in Touch/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:bmichelcano@gmail.com')
  })

  it('renders LinkedIn and GitHub social links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /Connect on LinkedIn/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Check my Code/i })).toBeInTheDocument()
  })
})
