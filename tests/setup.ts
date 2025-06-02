// Test setup file for design system
import { expect } from 'vitest';
import '@testing-library/jest-dom';

// Extend expect with jest-dom matchers
declare global {
	namespace Vi {
		interface JestAssertion<T = any> extends jest.Matchers<void, T> {}
	}
} 