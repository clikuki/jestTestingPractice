import calculator from './calculator';

it('adds', () =>
{
	expect(calculator.add(6, 3)).toBe(9);
})

it('subtracts', () =>
{
	expect(calculator.subtract(10, 3)).toBe(7);
})

it('can subtract with negative numbers', () =>
{
	expect(calculator.subtract(3, 9)).toBe(-6);
})

it('multiplies', () =>
{
	expect(calculator.multiply(15, 2)).toBe(30);
})

it('divides', () =>
{
	expect(calculator.divide(16, 2)).toBe(8);
})

it('throws an exception when dividing by zero', () =>
{
	expect(() => calculator.divide(1, 0)).toThrow(/0|zero/);
})