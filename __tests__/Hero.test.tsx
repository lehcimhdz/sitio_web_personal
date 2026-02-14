
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
        h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
        p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    },
}))

describe('Hero Component', () => {
    it('renders the Data Engineer title', () => {
        render(<Hero />)

        // Check for the main heading
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toHaveTextContent('Data Engineer')
    })

    it('renders the navigation buttons', () => {
        render(<Hero />)

        // Should have "View Work" and "Contact Me" buttons/links
        expect(screen.getByText('View Work')).toBeInTheDocument()
        expect(screen.getByText('Contact Me')).toBeInTheDocument()
    })

    it('renders social links', () => {
        render(<Hero />)

        // Check if GitHub and LinkedIn links exist
        expect(screen.getByText('GitHub')).toBeInTheDocument()
        expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    })
})
