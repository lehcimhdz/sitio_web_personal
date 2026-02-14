
import '@testing-library/jest-dom'
import React from 'react'

// Mock Lucide React to avoid "modularize-import-loader" errors in Jest
jest.mock('lucide-react', () => {
    return new Proxy({}, {
        get: (target, prop) => {
            // Return a simple component for any icon import
            const Icon = (props: any) => React.createElement('svg', {
                ...props,
                'data-testid': `icon-${String(prop)}`
            })
            return Icon
        }
    })
})
