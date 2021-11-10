const thief1 = {
	name: "Arsène Lupin",
	email: "gentleman@cambrioleur.com",
	password: "I like potatoes",
	avatar_image: "🎩",
};

const thief2 = {
	name: "Doug Judy",
	email: "pontiac@bandit.com",
	password: "ROSAROSAROSA",
	avatar_image: "🚗",
};

const listOfUsers = [thief1, thief2];
const userDatabaseIsh = {
	"gentleman@cambrioleur.com": thief1,
	"pontiac@bandit.com": thief2,
};
const emptyDatabaseIsh = {};

module.exports = { listOfUsers, userDatabaseIsh, emptyDatabaseIsh };
