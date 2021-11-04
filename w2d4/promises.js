const francisFridge = [
	{ name: "🥦", quantity: 1 },
	{ name: "🍟", quantity: 5 },
	{ name: "🥐", quantity: 2 },
	{ name: "🌮", quantity: 3 },
];

const walkToTheFridge = (fridge) => {
	return new Promise((successCallback, errorCallback) => {
		setTimeout(() => {
			if (Math.random() > 0.9) {
				successCallback(fridge);
			} else {
				errorCallback("fell while walking");
			}
		}, 1000);
	});
};

console.log("IM ABOUT TO WALK");

walkToTheFridge(francisFridge)
	.then((fridge) => {
		console.log(fridge);
		return walkToTheFridge(francisFridge);
	})
	.then((fridge) => {
		console.log(fridge);
	})
	.catch((error) => console.log(error))
	.finally(() => console.log("WERE DONE HERE"));

// walkToTheFridge(francisFridge, (fridge, error) => {
// 	console.log(fridge);
// 	if (!error) {
// 		walkToTheFridge(francisFridge, (fridge, error) => {
// 			console.log(fridge);
// 			if (!error) {
// 				walkToTheFridge(francisFridge, (fridge, error) => {
// 					console.log(fridge);
// 					if (!error) {
// 					}
// 				});
// 			}
// 		});
// 	}
// });
