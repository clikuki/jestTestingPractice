const getAverage = (arr) =>
{
	const arraySum = arr.reduce((acc, cur) => acc + cur, 0);
	return arraySum / arr.length;
}

const getMin = (arr) => arr.length ? Math.min(...arr) : null;
const getMax = (arr) => arr.length ? Math.max(...arr) : null;

export default (arr) => ({
	average: getAverage(arr),
	min: getMin(arr),
	max: getMax(arr),
	length: arr.length,
})