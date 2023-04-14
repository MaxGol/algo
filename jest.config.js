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

// env vars for tests
Object.assign(process.env, {
    NODE_ENV:'jest-tests',
    IMAGE_SERVER_BASE: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F',
    IMAGE_SERVER_PATH_MOBILE_APPS: 'https://feeds.thetimes.co.uk/smartphone/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F',
    TPA_GRAPHQL_URL:'https://api.thetimes.co.uk/graphql',
    EDITION_EVENT_QUEUE:'EDITION_EVENT_QUEUE',
    PORT: 'PORT',
    AWS_BUCKET_NAME: 'AWS_BUCKET_NAME',
    AWS_BUCKET_KEY: 'AWS_BUCKET_KEY',
    AWS_REGION: 'AWS_REGION',
    AWS_ACCESS_KEY: 'AWS_ACCESS_KEY',
    AWS_SECRET_KEY: 'AWS_SECRET_KEY',
    PROCESS_EDITION: 'PROCESS_EDITION',
    PROCESS_SECTION: 'PROCESS_SECTION',
    PROCESS_ARTICLE: 'PROCESS_ARTICLE'
});
