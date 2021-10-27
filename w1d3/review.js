// Functions, Arrays, Loops, Conditional

// Nested arrays
// Refactor?
// Nested for loops
// Debugging

const someList = ["Pollo", "Poulet", "Chicken"];

const result = someList[1];

console.log(result);

const someComplexList = [
	["Pollo", "Poulet", "Chicken"],
	["Gato", "Chat", "Cat"],
];

const firstArray = someComplexList[0];

const result = firstArray[1];

console.log(result);

const someComplexListAgain = [
	["Pollo", "Poulet", "Chicken"],
	["Gato", "Chat", "Cat"],
];

//
for (const list of someComplexListAgain) {
	for (const element of list) {
		console.log(element);
	}
}

for (let i = 0; i < someComplexListAgain.length; i++) {
	const list = someComplexListAgain[i];

	for (let j = 0; j < list.length; j++) {
		const element = list[j];
		console.log(element);
	}
}
