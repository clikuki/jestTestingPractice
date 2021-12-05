import capitalize from '../code/capitalize';

it('capitalizes the first letter', () =>
{
	expect(capitalize('hello')).toBe('Hello');
	expect(capitalize('bye')).toBe('Bye');
})