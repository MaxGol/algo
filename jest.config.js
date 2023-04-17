module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    reporters: [
        'default'
    ],
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts}'],
    testPathIgnorePatterns: ['src'],
    coveragePathIgnorePatterns: [
        'node_modules',
        'coverage',
        '.vscode',
        'wallaby.js',
        'src/types',
    ],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: -10
        }
    }

};
