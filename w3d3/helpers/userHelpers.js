const generateUserHelpers = (userDB) => {
	const getUserObject = (userId) => {
		const currentUser = userDB[userId];

		if (currentUser) {
			return currentUser;
		}

		return {};
	};

	const authenticateUserObj = (email, password) => {
		const userObj = userDB[email];

		if (!userObj) {
			return { data: null, err: "Bad email" };
		}

		if (userObj.password !== password) {
			return { data: null, err: "Bad password" };
		}

		return { data: userObj, err: null };
	};

	const authenticateUserArr = (list, email, password) => {
		for (const user of list) {
			if (user.email === email) {
				if (user.password === password) {
					return { data: user, err: null };
				}
				return { data: null, err: "Bad password" };
			}
		}
		return { data: null, err: "Bad email" };
	};

	return { authenticateUserArr, authenticateUserObj, getUserObject };
};

module.exports = generateUserHelpers;
