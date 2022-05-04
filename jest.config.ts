import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const config: Config.InitialOptions = {
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['src'],
  transform: { '^.+\\.svg$': 'jest-svg-transformer' },
  // moduleNameMapper: {
  //   '\\.svg': require.resolve(`./__mocks__/svg.js`),
  // },
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/types/**/*.d.ts',
    '!src/styles/**/*.ts',
  ],
};

export default createJestConfig(config);
