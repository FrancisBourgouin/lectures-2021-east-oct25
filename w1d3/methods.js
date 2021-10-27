const aMugAgain = {
	color: "Red",
	takeASip: function (amount) {
		for (let i = 0; i < amount; i++) {
			console.log("LOUDEST SLURP EVER");
		}
	},
};

aMugAgain.takeASip(1);
aMugAgain["takeASip"](20);

console.log();

process.argv;
