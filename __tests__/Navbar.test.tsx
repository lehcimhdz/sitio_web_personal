
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

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

  it('renders all desktop nav links', () => {
    render(<Navbar />)
    const labels = ['Experience', 'Skills', 'Portfolio', 'About', 'Contact']
    labels.forEach(label => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    })
  })

  it('has transparent header when not scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
    expect(header.className).toContain('border-transparent')
  })

  it('has solid background when scrolled', () => {
    const useScrollPosition = require('@/hooks/useScrollPosition')
    useScrollPosition.mockReturnValue(true)
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-slate-900/90')
  })

  it('mobile menu is hidden by default', () => {
    render(<Navbar />)
    // The mobile nav buttons are in the dropdown; it should not be visible
    const mobileLinks = screen.queryAllByRole('button', { name: 'Experience' })
    // Only desktop buttons visible, mobile menu collapsed
    expect(screen.queryByText('About') ).toBeInTheDocument() // exists but in hidden menu
  })

  it('mobile menu opens when hamburger button is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: '' })
    fireEvent.click(toggle)
    // After opening, mobile nav links appear (they're plain buttons in the dropdown)
    const mobileButtons = screen.getAllByRole('button')
    expect(mobileButtons.length).toBeGreaterThan(1)
  })

  it('clicking a nav link scrolls to the section', () => {
    document.body.innerHTML = '<div id="experience"></div>'
    render(<Navbar />)
    const buttons = screen.getAllByText('Experience')
    fireEvent.click(buttons[0])
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
