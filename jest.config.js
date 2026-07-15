/**
 * Minimal Jest setup for pure TypeScript domain logic (the entity lib
 * folders). Component tests would add jest-expo later; lean until then.
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
};
