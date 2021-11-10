const userHelperGenerator = (userDB) => {
	const getUserInformation = (email) => {
		const currentUser = userDB[email];

		if (!currentUser) {
			return {};
		}

		return currentUser;
	};

	const fancyGetUserInformation = (email) => userDB[email] || {};

	const authenticateUser = (email, password) => {
		const currentUser = userDB[email];
		// Check if email and username are good

		if (!currentUser) {
			// If email doesn't exist, eject
			return { error: "Bad email", data: null };
		}

		if (currentUser.password !== password) {
			// If password doesn't match, eject
			return { error: "Bad password", data: null };
		}
		// Send back the user info in the shape of a JSON response
		return { data: currentUser, error: null };
	};

	return {
		getUserInformation,
		fancyGetUserInformation,
		authenticateUser,
	};
};

module.exports = userHelperGenerator;
