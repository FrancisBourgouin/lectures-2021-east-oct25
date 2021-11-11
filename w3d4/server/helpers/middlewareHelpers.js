const middlewareHelperGenerator = (userDB, fetchUserInformation) => {
	const cookieCheck = (req, res, next) => {
		// const { email } = req.cookies;
		const { email } = req.session;
		const safeList = ["/", "/login"];
		const isSafe = safeList.includes(req.path);
		// Fetch user information based on the value of the cookie
		const { data, error } = fetchUserInformation(userDB, email);

		if (error && !isSafe) {
			console.log(error);
			return res.redirect("/");
		}

		return next();
	};

	return { cookieCheck };
};

module.exports = middlewareHelperGenerator;
