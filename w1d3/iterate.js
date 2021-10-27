// for(const item of list)

// for(const key in object)

const obj = { a: 1, b: 2, c: 3 };

obj.d = 4;
obj["e"] = 5;

const keysArr = Object.keys(obj); // => ["a","b","c"]

for (const key of keysArr) {
	console.log(obj[key]);
}

// OR

for (const key in obj) {
	console.log(obj[key]);
}

const valuesArr = Object.values(obj); // [1,2,3]

for (const value of valuesArr) {
	console.log(value);
}
