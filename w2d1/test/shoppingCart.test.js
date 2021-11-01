const { round, shoppingCart } = require("../shoppingCart");

const chai = require("chai");
chai.should();
const expect = chai.expect;

const QCTAX = 0.14975;

describe("Rounding calculations", () => {
	it("it rounds up a valid number to its closest integer", () => {
		const input = 1149.9;
		const expectedOutput = 1150;

		const result = round(input);

		result.should.equal(expectedOutput);
	});
	it("it rounds down a valid number to its closest integer", () => {
		const input = 1149.3;
		const expectedOutput = 1149;

		const result = round(input);

		result.should.equal(expectedOutput);
	});
	it("should return null if input is invalid", () => {
		const input = "🚀";
		const expectedOutput = null;

		const result = round(input);

		expect(result).to.equal(expectedOutput);
	});
});

describe("ShoppingCart function", () => {
	it("returns the proper amount of items from the array of products", () => {
		const listOfItems = [
			{ name: "Banana", priceInCents: 79, category: "Food" },
			{ name: "PS5", priceInCents: 49999, category: "Console" },
			{ name: "Pistachios", priceInCents: 939, category: "Food" },
			{ name: "Chicken", priceInCents: 479, category: "Food" },
			{ name: "Cheese Curds", priceInCents: 979, category: "Food" },
		];

		const expectedOutput = 5;

		const result = shoppingCart(listOfItems, QCTAX);

		expect(result.amountOfItems).to.equal(expectedOutput);
	});
	it("returns the subtotal properly", () => {
		const listOfItems = [
			{ name: "Banana", priceInCents: 79, category: "Food" },
			{ name: "PS5", priceInCents: 49999, category: "Console" },
			{ name: "Pistachios", priceInCents: 939, category: "Food" },
			{ name: "Chicken", priceInCents: 479, category: "Food" },
			{ name: "Cheese Curds", priceInCents: 979, category: "Food" },
		];

		const expectedOutput = 52475;

		const result = shoppingCart(listOfItems, QCTAX);

		expect(result.subtotal).to.equal(expectedOutput);
	});
	it("returns the total properly", () => {
		const listOfItems = [
			{ name: "Banana", priceInCents: 79, category: "Food" },
			{ name: "PS5", priceInCents: 49999, category: "Console" },
			{ name: "Pistachios", priceInCents: 939, category: "Food" },
			{ name: "Chicken", priceInCents: 479, category: "Food" },
			{ name: "Cheese Curds", priceInCents: 979, category: "Food" },
		];

		const expectedOutput = 60333;

		const result = shoppingCart(listOfItems, QCTAX);

		expect(result.total).to.equal(expectedOutput);
	});
	it("returns the taxes properly", () => {
		const listOfItems = [
			{ name: "Banana", priceInCents: 79, category: "Food" },
			{ name: "PS5", priceInCents: 49999, category: "Console" },
			{ name: "Pistachios", priceInCents: 939, category: "Food" },
			{ name: "Chicken", priceInCents: 479, category: "Food" },
			{ name: "Cheese Curds", priceInCents: 979, category: "Food" },
		];

		const expectedOutput = 7858;

		const result = shoppingCart(listOfItems, QCTAX);

		expect(result.tax).to.equal(expectedOutput);
	});
	it("returns null if given an invalid input", () => {
		const expectedOutput = null;

		const result = shoppingCart("🍞🍞🍞", QCTAX);

		expect(result).to.equal(expectedOutput);
		expect(result).to.be.null
	});
	it("returns an object with all values at 0 if given an empty array", () => {
		const expectedOutput = {
			subtotal: 0,
			total: 0,
			tax: 0,
			amountOfItems: 0,
		};

		const result = shoppingCart([], QCTAX);

		expect(result).to.deep.equal(expectedOutput);
	});
	it("bob !", () => {})
});


"