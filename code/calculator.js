export default {
	add: (x, y) => x + y,
	subtract: (x, y) => x - y,
	multiply: (x, y) => x * y,
	divide: (x, y) =>
	{
		if(!x || !y) throw 'can\'t divide by zero';
		return x / y;
	},
}