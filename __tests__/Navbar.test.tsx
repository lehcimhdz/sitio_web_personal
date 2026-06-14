import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'
import '@testing-library/jest-dom'

jest.mock('@/hooks/useScrollPosition', () => jest.fn(() => false))

const mockScrollIntoView = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
  window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView
})

describe('Navbar', () => {
  it('renders the site name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Michel Cano/)).toBeInTheDocument()
  })

  it('renders the new desktop nav labels', () => {
    render(<Navbar />)
    const labels = ['Work', 'Stack', 'Projects', 'About', 'Contact']
    labels.forEach(label => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    })
  })

  it('mobile menu opens when hamburger button is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('clicking a nav link scrolls to the section', () => {
    document.body.innerHTML = '<div id="experience"></div>'
    render(<Navbar />)
    const buttons = screen.getAllByText('Work')
    fireEvent.click(buttons[0])
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
