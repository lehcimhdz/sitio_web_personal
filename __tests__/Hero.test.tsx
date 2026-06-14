import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import '@testing-library/jest-dom'

describe('Hero', () => {
    it('renders the new headline (no template formula)', () => {
        render(<Hero />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toHaveTextContent(/Backend engineer/i)
        expect(heading).not.toHaveTextContent('Senior Backend Developer.')
        expect(heading).not.toHaveTextContent('Building production')
    })

    it('renders name and location in the meta line', () => {
        render(<Hero />)
        expect(screen.getByText(/Michel Cano/)).toBeInTheDocument()
        expect(screen.getAllByText(/Mexico City/).length).toBeGreaterThan(0)
    })

    it('renders contact links', () => {
        render(<Hero />)
        expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /bmichelcano/ })).toHaveAttribute(
            'href',
            'mailto:bmichelcano@gmail.com'
        )
    })

    it('does not render the stats counter', () => {
        render(<Hero />)
        expect(screen.queryByText(/cases\/year/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/automated tests/i)).not.toBeInTheDocument()
    })
})
