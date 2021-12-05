import reverseString from "./reverseString";

it('reverses string', () =>
{
	expect(reverseString('abc')).toBe('cba');
	expect(reverseString('Hello')).toBe('olleH');
})
