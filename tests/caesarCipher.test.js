import caesarCipher from '../code/caesarCipher';

it('shifts string', () =>
{
	expect(caesarCipher('hello', 5)).toBe('mjqqt');
})

it('keeps letter cases', () =>
{
	expect(caesarCipher('AHA', 5)).toBe('FMF');
})

it('keeps punctuation and other characters', () =>
{
	expect(caesarCipher('abc |!?>< def', 1)).toBe('bcd |!?>< efg');
})

it('wraps back around alphabet', () =>
{
	expect(caesarCipher('xyz', 3)).toBe('abc');
})