// const someValue = 5;

const functionGenerator = (someValue) => {
	const someFunction = (times) => {
		for (let i = 0; i < times; i++) {
			console.log(someValue);
		}
	};

	const someOtherFunction = (number) => {
		console.log(number + someValue);
	};

	return { someFunction, someOtherFunction };
};

const { someFunction, someOtherFunction } = functionGenerator(10);

someFunction(2);
someOtherFunction(10);
