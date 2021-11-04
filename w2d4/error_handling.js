const fridge = [
	{ name: "🥦", quantity: 1 },
	null,
	{ name: "🍟", quantity: 5 },
	{ name: "🥐", quantity: 2 },
	{ name: "🌮", quantity: 3 },
];

const lookAtEveryItemInFridgeAndDoSomething = (fridge, action) => {
	for (const ingredient of fridge) {
		action(ingredient);
	}
};

// lookAtEveryItemInFridgeAndDoSomething(fridge, (ingredient) => {
// 	try {
// 		setTimeout(() => console.log(ingredient.name), 1000);
// 	} catch (error) {
// 		console.log("There was an unknown entity in the fridge");
// 	}
// });

lookAtEveryItemInFridgeAndDoSomething(fridge, (ingredient) => {
	setTimeout(() => {
		try {
			console.log(ingredient.name);
		} catch (error) {
			console.log("There was an unknown entity in the fridge");
		}
	}, 1000);
});

// try
// setTimeout()
// ... 1s
// () => console.log(ingredient.name) OH NOES
