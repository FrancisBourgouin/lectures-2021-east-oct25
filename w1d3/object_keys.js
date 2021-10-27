const anotherMug = {
	color: "black",
	batteryLevel: "60%",
	materials: ["metal", "ceramic", "lithium", "rubber"],
	contentRatio: {
		coffee: 70,
		milk: 30,
	},
	"some key": true,
};

const singleKey = "batteryLevel";

const listOfKeys = ["color", "batteryLevel"];

const contentRatioOfAnotherMug = anotherMug["contentRatio"];
const result1 = contentRatioOfAnotherMug["milk"];
const result2 = anotherMug.contentRatio.milk; // Litterally the name of the key
const result3 = anotherMug[singleKey];

const consoleTheValueAtASpecificKey = function (object, key) {
	console.log(object[key]);
};

consoleTheValueAtASpecificKey({ a: 1 }, "b");

for (const key of listOfKeys) {
	console.log(anotherMug[key]);
}

console.log(result1, result2);

const objectA = { name: "Bob" };
const objectB = { name: "Robert" };
const someRandomKey = "name";

objectA[someRandomKey];
objectB[someRandomKey];
