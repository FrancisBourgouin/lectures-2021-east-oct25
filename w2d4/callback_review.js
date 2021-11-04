// What is a callback?

// A function in another function (as a parameter)

// Why?

// Async => necessary for async work
// Code reuse, more efficient

// Higher Order Functions (HOF)

// That they use a callback
// That they return a function definition
const exampleIngredient = { name: "🥦", quantity: 1 }; // ["🥦",1]

const fridge = [
	{ name: "🥦", quantity: 1 },
	null,
	{ name: "🍟", quantity: 5 },
	{ name: "🥐", quantity: 2 },
	{ name: "🌮", quantity: 3 },
];

// 🌮🌮🌮🌮

// function check if quantity > 4
// check the ingredient too

const checkAmountOfBurritos = (fridge, amount) => {
	// Iterate over the fridge
	for (const ingredient of fridge) {
		//[]
		// if the ingredient is burrito
		if (ingredient.name === "🌮") {
			//{name, quantity}
			// if the quantity is bigger than amount
			if (ingredient.quantity >= amount) {
				// return true
				return true;
			} else {
				return false;
			}
			// else return galse
		}
	}
	return null;
};
const checkAmountOfIngredient = (ingredient, amount) =>
	ingredient.quantity >= amount;

const lookAtEveryItemInFridgeAndDoSomething = (fridge, action) => {
	for (const ingredient of fridge) {
		action(ingredient);
	}
};

const checkAmountForIngredient = (fridge, amount, ingredientName) => {
	// Iterate over the fridge
	for (const ingredient of fridge) {
		// if the ingredient is burrito
		if (ingredient.name === ingredientName) {
			// if the quantity is bigger than amount
			if (ingredient.quantity >= amount) {
				// return true
				return true;
			} else {
				return false;
			}
			// else return galse
		}
	}
	return null;
};

const showEveryIngredientInFridge = (fridge) => {
	// Iterate over the fridge
	for (const ingredient of fridge) {
		// console the name of the ingredient
		console.log(ingredient.name);
	}
};

lookAtEveryItemInFridgeAndDoSomething(fridge, (ingredient) => {
	try {
		console.log(ingredient.name);
	} catch (error) {
		console.log("There was an unknown entity in the fridge");
	}
});

// try {
// 	lookAtEveryItemInFridgeAndDoSomething(fridge, (ingredient) => {
// 		console.log(ingredient.name);
// 	});
// } catch (error) {
// 	console.log("There was an unknown entity in the fridge");
// }
