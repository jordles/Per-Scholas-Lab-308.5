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

/* -------------------------------------------------------------------------- */
/*                        PART 2: THINKING METHODICALLY                       */
/* -------------------------------------------------------------------------- */
console.group("Part 2: Thinking Methodically");
const test = [
	{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
	{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
	{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
	{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
	{ id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
console.log(test.sort((a, b) => a.age - b.age));
// Filter the array to remove entries with an age greater than 50.
console.log(test.filter(({ age }) => +age < 50));

// Map the array to change the “occupation” key to “job” and increment every age by 1.
console.log(test.map(({occupation, ...obj}) => {
  return {...obj, job: occupation, age: String(+obj.age + 1)};
}));

// Use the reduce method to calculate the sum of the ages.
console.log(test.reduce((acc, { age }) => acc + +age, 0));
  // Then use the result to calculate the average age.
  console.log(test.reduce((acc, { age }) => acc + +age, 0) / test.length);

console.groupEnd();
/* ---------------------------------------------------------------------- */
/*                       PART 3: THINKING CRITICALLY                      */
/* ---------------------------------------------------------------------- */

console.group("Part 3: Thinking Critically");

// For each of the functions below, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

// For this section, develop functions that accomplish the following:

// Take an object and increment its age field.
function incrementAge(obj) {
  obj.age = String((+obj.age || 0) + 1);
  obj.updated_at = new Date();
  return obj;
}

function incrementAge2(obj){
  return {...obj, updated_at: new Date(), age: String((+obj.age || 0) + 1)};
}

console.log(incrementAge({name: "Bob", age: "19"}));
console.log(incrementAge2({name: "Bob", age: "19"}));

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

let originalDate = new Date();
function incrementAgeCopy(obj){
  let copy = {...obj};
  copy.age = String((+obj.age || 0) + 1);
  copy.updated_at = originalDate; /* .setFullYear(originalDate.getFullYear() + 1); */
  return copy;
}
function incrementAgeCopy2(obj) {
  return { ...obj, updated_at: originalDate, age: String((+obj.age || 0) + 1) };
}

let original = { name: "Jane", age: "19" };
console.log(original);
console.log(incrementAgeCopy(original));
console.log(incrementAgeCopy2(original));

//thought process - if we do change something on the date object, it will affect the original date object. We must create a copy of the date object before we change it or else we will mutate the original date object.

console.groupEnd();