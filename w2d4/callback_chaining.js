const francisFridge = [
	{ name: "🥦", quantity: 1 },
	{ name: "🍟", quantity: 5 },
	{ name: "🥐", quantity: 2 },
	{ name: "🌮", quantity: 3 },
];

const walkToTheFridge = (fridge, action) => {
	setTimeout(() => {
		action(fridge);
	}, 1000);
};

const pickIngredientFromFridge = (fridge, ingredientToPick) => {
	for (const ingredient of fridge) {
		if (ingredient.name === ingredientToPick) {
			ingredient.quantity--;
		}
	}
};

console.log(francisFridge);

walkToTheFridge(francisFridge, (fridge) => {
	pickIngredientFromFridge(fridge, "🥐");
});

walkToTheFridge(francisFridge, (fridge) => {
	// Walked to the fridge
	pickIngredientFromFridge(fridge, "🥐");
	pickIngredientFromFridge(fridge, "🥐");
	console.log("Picked croissant");
	// Picked the croissants
	walkToTheFridge(francisFridge, (fridge) => {
		// Walked to the fridge
		pickIngredientFromFridge(fridge, "🍟");
		console.log("Picked fries");
		// Picked the fries
		walkToTheFridge(francisFridge, (fridge) => {
			// Walked to the fridge
			pickIngredientFromFridge(fridge, "🌮");
			console.log("Picked burritos");
			// Picked the burritos
		});
	});
});

const pickTheBurritosWhenReady = (fridge) => {
	// Walked to the fridge
	pickIngredientFromFridge(fridge, "🌮");
	console.log("Picked burritos");
	// Picked the burritos
};

const pickTheFriesThenWalkToPickTheBurritos = (fridge) => {
	// Walked to the fridge
	pickIngredientFromFridge(fridge, "🍟");
	console.log("Picked fries");
	// Picked the fries
	walkToTheFridge(francisFridge, pickTheBurritosWhenReady);
};

const pickTheCroissantThenTheFriesThenTheBurritos = (fridge) => {
	// Walked to the fridge
	pickIngredientFromFridge(fridge, "🥐");
	pickIngredientFromFridge(fridge, "🥐");
	console.log("Picked croissant");
	// Picked the croissants
	walkToTheFridge(francisFridge, pickTheFriesThenWalkToPickTheBurritos);
};

walkToTheFridge(francisFridge, pickTheCroissantThenTheFriesThenTheBurritos);

console.log(francisFridge);

fs.readFile("/file.txt", { encoding: "utf8" }, (data, err) => {
	fs.readFile("/file.txt", { encoding: "utf8" }, (data, err) => {
		fs.readFile("/file.txt", { encoding: "utf8" }, (data, err) => {
			fs.readFile("/file.txt", { encoding: "utf8" }, (data, err) => {});
		});
	});
});
