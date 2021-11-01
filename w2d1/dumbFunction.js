// Input : Array of potato ["🥔","🍞", "🥔"]
// Expected : 2

const countThePotatoes = (list) => {
	// initiliaze a buffer / counter / wtv
	let amount = 0;
	// iterate over the list
	for (const item of list) {
		// check if item is a potato
		if (item === "🥔") {
			// if it is a potato
			// plus 1
			amount++;
		}
	}
	// return amount
	return amount;
};
