const functionGenerator = (someValue) => {
	const someFunction = (times) => {
		for (let i = 0; i < times; i++) {
			console.log(someValue);
		}
	};

	const someOtherFunction = () => {
		console.log(someValue);
	};

	const someOtherOtherFunction = (number) => {
		console.log(number + someValue);
	};

	return { someFunction, someOtherFunction, someOtherOtherFunction };
};

const { someFunction, someOtherFunction, someOtherOtherFunction } =
	functionGenerator(55);
// const tempConverter = (temp) => {
//   const round = (value) => Math.round(value * 10) / 10

//   return round(temp)
// }

someFunction(2);
someOtherFunction();
someOtherOtherFunction(10);
