const thief1 = {
	name: "Arsène Lupin",
	email: "gentleman@cambrioleur.com",
	avatar: "🎩",
	password: "1234",
};

const thief2 = {
	name: "Doug Judy",
	email: "pontiac@bandit.com",
	avatar: "🚗",
	password: "ROSAROSAROSA",
};

// [] or {}

const userDatabaseIsh = {
	"gentleman@cambrioleur.com": thief1,
	"pontiac@bandit.com": thief2,
};

module.exports = userDatabaseIsh;
