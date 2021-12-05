const charCodeStart = 'a'.charCodeAt();
const charCodeEnd = 'z'.charCodeAt();
const alphabetLength = charCodeEnd - charCodeStart + 1;
const charMap = Array.from({length: alphabetLength}, (_, i) => String.fromCharCode(i + charCodeStart));

const checkIfUpperCase = (char) =>
{
	if(char.length > 1) throw new Error('string longer than 1 character');
	if(char.toLowerCase() !== char) return true;
	else return false;
}

const getShiftedChar = (char, shiftBy) =>
{
	const isUpperCase = checkIfUpperCase(char);
	const charIndex = charMap.findIndex(arrChar => arrChar === char.toLowerCase());
	const newIndex = (charIndex + shiftBy) % alphabetLength;
	let newChar = charMap[newIndex];

	if(isUpperCase) newChar = newChar.toUpperCase();
	return newChar;
}

export default (str, shiftBy) => str.split('').map(char =>
{
	if(!charMap.includes(char.toLowerCase())) return char;
	return getShiftedChar(char, shiftBy);
}).join('');