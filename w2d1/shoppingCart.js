const round = (number) => {
	if (typeof number !== "number") {
		return null;
	}
	return Math.round(number);
};

const calculateSubtotal = (listOfItems) => {
	let subtotal = 0;
	for (const item of listOfItems) {
		subtotal += item.priceInCents;
	}
	return subtotal;
};
const shoppingCart = (listOfItems, taxPercentage) => {
	// !Array.isArray(listOfItems) && return null;
	if (!Array.isArray(listOfItems)) {
		// Ejects if array is invalid
		return null;
	}
	// Length
	const amountOfItems = listOfItems.length;
	// Subtotal
	let subtotal = calculateSubtotal(listOfItems);
	// Taxes
	const tax = round(subtotal * taxPercentage);
	// Total
	const total = subtotal + tax;

	return { amountOfItems, subtotal, tax, total };
};

module.exports = { round, shoppingCart };
