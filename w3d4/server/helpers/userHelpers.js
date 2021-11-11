const bcrypt = require("bcryptjs");

const authenticateUser = (userDB, email, password) => {
	const currentUser = userDB[email];

	if (!currentUser) {
		// If it doesn't match, redirect to /

		return { data: null, error: "Not a valid email" };
	}

	// if (currentUser.password !== password) {
	if (!bcrypt.compareSync(password, currentUser.password)) {
		// If it doesn't match, redirect to /
		return { data: null, error: "Not a valid password" };
	}
	// If it match, redirect to /vault + cookie
	return { data: currentUser, error: null };
};

const fetchUserInformation = (userDB, email) => {
	const currentUser = userDB[email];

	if (!currentUser) {
		return { data: null, error: "Invalid email in cookie" };
	}
	return { data: currentUser, error: null };
};

module.exports = { authenticateUser, fetchUserInformation };
