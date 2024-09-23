/* -------------------------------------------------------------------------- */
/*                        PART 1: THINKING FUNCTIONALLY                       */
/* -------------------------------------------------------------------------- */
console.group("Part 1: Thinking Functionally");
// Take an array of numbers and return the sum.
function sum(numbers) {
	return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ------------------------------------ - ----------------------------------- */
// Take an array of numbers and return the average.
function average(numbers) {
	return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/* ------------------------------------ - ----------------------------------- */
// Take an array of strings and return the longest string.
function longestString(strings) {
	return strings.reduce(
		(longest, currentStr) =>
			longest.length > currentStr.length ? longest : currentStr,
		""
	);
}

console.log(longestString(["My", "name", "is", "Jacky"]));

/* ------------------------------------ - ----------------------------------- */
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function stringsLongerThan(strings, n) {
	return strings.filter((str) => str.length > n);
}

console.log(stringsLongerThan(["My", "name", "is", "Jacky"], 3));

// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
/* ------------------------------------ - ----------------------------------- */
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n) {
	if (n === 1) return;
	console.log(n);
	printNumbers(n - 1);
}

console.groupEnd();

