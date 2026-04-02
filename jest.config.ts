
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        'modularize-import-loader.*': '<rootDir>/__mocks__/lucideMock.js'
    },
    collectCoverageFrom: [
        'src/components/**/*.tsx',
        'src/hooks/**/*.ts',
        'src/lib/**/*.ts',
        '!src/components/DataFlowBackground.tsx',
    ],
    coverageThreshold: {
        global: {
            lines: 60,
            branches: 60,
            functions: 60,
            statements: 60,
        },
    },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
