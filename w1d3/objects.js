// Primitive data types

// Boolean : truthy: true, falsy: false
// String : truthy: EVERYTHING... but falsy: ""
// Number : truthy: ANUYTHING... but falsy: 0, NaN
// Null : falsy
// Undefined : falsy
// Symbol : truthy
// BigInt : truthy: everything but 0

// Data structures

// Objects: are always truthy
// Arrays: are always truthy

const someArray = [1, 2, 3, 4, 5]; // Order is important

const someObject = {
	key: "value",
};

let bob = {};
bob = null;

const someMug = {
	color: "light blue",
	capacity: "400ml",
	material: "ceramic",
	hasStickers: false,
	hasHandle: true,
};

someMug["color"];
someMug.color;

const anotherMug = {
	color: "black",
	batteryLevel: "60%",
	materials: ["metal", "ceramic", "lithium", "rubber"],
	contentRatio: {
		coffee: 70,
		milk: 30,
	},
};

const listOfMugs = [someMug, anotherMug];
