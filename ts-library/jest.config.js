let config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
};

export default config;
