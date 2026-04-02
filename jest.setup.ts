
import '@testing-library/jest-dom'
import React from 'react'

// Mock Lucide React to avoid "modularize-import-loader" errors in Jest
jest.mock('lucide-react', () => {
    return new Proxy({}, {
        get: (target, prop) => {
            const Icon = (props: any) => React.createElement('svg', {
                ...props,
                'data-testid': `icon-${String(prop)}`
            })
            return Icon
        }
    })
})

// Global framer-motion mock — strips animation props and renders plain HTML elements
jest.mock('framer-motion', () => ({
    motion: new Proxy({}, {
        get: (_, tag) => {
            const Component = ({ children, initial, animate, exit, transition, variants,
                viewport, whileInView, whileHover, whileTap, ...rest }: any) =>
                React.createElement(String(tag), rest, children)
            Component.displayName = `motion.${String(tag)}`
            return Component
        }
    }),
    AnimatePresence: ({ children }: any) => children,
}))
