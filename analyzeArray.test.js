import analyzeArray from "./analyzeArray";

it('gets the minimum value in array', () =>
{
	const arr = [1,8,3,4,2,6];
	const obj = analyzeArray(arr);

	expect(obj.min).toBe(1);
})

it('gets the maximum value in array', () =>
{
	const arr = [1,8,3,4,2,6];
	const obj = analyzeArray(arr);

	expect(obj.max).toBe(8);
})

it('gets the average value in array', () =>
{
	const arr = [1,8,3,4,2,6];
	const obj = analyzeArray(arr);

	expect(obj.average).toBe(4);
})

it('gets the length of array', () =>
{
	const arr = [1,8,3,4,2,6];
	const obj = analyzeArray(arr);

	expect(obj.length).toBe(arr.length);
})

it('works with empty arrays', () =>
{
	const obj = analyzeArray([]);
	const hasProp = (obj, prop) => ({}).hasOwnProperty.call(obj, prop);

	expect(obj.length).toBe(0);
	expect(hasProp(obj, 'average')).toBe(true);
	expect(hasProp(obj, 'min')).toBe(true);
	expect(hasProp(obj, 'max')).toBe(true);
})
