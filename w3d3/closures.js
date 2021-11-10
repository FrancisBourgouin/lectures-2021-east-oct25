// const someValue = 5;

// const tempCtoF = (temp) => {
//   const round = value => Math.round(value * 100) / 100

//   return round(temp)
// }
// const tempFtoC = (temp) => {
//   const round = value => Math.round(value * 10) / 10

//   return round(temp)
// }

const functionWrapper = (someValue) => {
	const bob = { a: 1 };

	const someFunction = (times) => {
		for (let i = 0; i < times; i++) {
			console.log(someValue);
		}
	};

	const someOtherFunction = (value) => {
		console.log(value + someValue);
	};

	return { bob, someFunction, someOtherFunction };
};

const { someFunction, someOtherFunction } = functionWrapper(10);
const bobby = functionWrapper(15);

someFunction(2);
someOtherFunction(20);

bobby.bob;

const bob = {
	method: () => {
		console.log(this);
	},
};

bob.method();
