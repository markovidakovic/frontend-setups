import { greet, farewell } from '../src/greetings.js';

test('greet function', () => {
	expect(greet('World')).toBe('Hello, World');
});

test('farawell function', () => {
	expect(farewell('World')).toBe('Goodbye, World');
});
