const user1 = {
	name: "Dimitri Ivanovich Mendeleiv",
	email: "periodic@table.com",
	password: "hydrogen",
	secret: "Actually prefers biology over chemistry",
};

const user2 = {
	name: "Leon Semionovitch Tolstoi",
	email: "war@peace.com",
	password: "potato",
	secret: "Absolutely loves Danielle Steele novels",
};

const userDatabaseIsh = {
	"periodic@table.com": user1,
	"war@peace.com": user2,
};

module.exports = userDatabaseIsh;
