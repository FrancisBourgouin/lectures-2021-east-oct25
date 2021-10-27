const aMugAgain = {
	color: "Red",
	takeASip: function (amount) {
		for (let i = 0; i < amount; i++) {
			console.log("LOUDEST SLURP EVER");
		}
	},
	mugColor: function () {
		console.log(`The mug is ${this.color}`);
	},
	someObject: {
		what: function () {
			console.log(this);
		},
	},
};

aMugAgain.someObject.what();

const aMug = {
	color: "Black",
	coffeeAmount: 500,
	takeASip: function () {
		const amount = 400;
		// console.log(this.amount) BAD
		if (this.coffeeAmount > 0) {
			console.log("LOUDEST SLURP EVER");
			this.coffeeAmount -= 100;
			console.log(`Remaining coffee : ${this.coffeeAmount}ml`);
		} else {
			console.log("NO MAS COFFEE");
		}
	},
	mugColor: function () {
		console.log(`The mug is ${this.color}`);
	},
};

// aMugAgain.mugColor();
// aMug.mugColor();

// const bob = function () {
// 	console.log(this);
// };

aMug.takeASip();
aMug.takeASip();
aMug.takeASip();
aMug.takeASip();
aMug.takeASip();
aMug.takeASip();
// aMugAgain.takeASip(1);
// aMugAgain["takeASip"](20);

// aMugAgain.what();
// bob();

const name = "bob";
