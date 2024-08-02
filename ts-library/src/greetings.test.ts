import { greet, farewell } from './greetings';

test('greet function returns correct greeting message', () => {
	expect(greet('Alice')).toBe('Hello, Alice');
});

test('farewell function returns correct farewell message', () => {
	expect(farewell('Alice')).toBe('Goodbye, Alice');
});
