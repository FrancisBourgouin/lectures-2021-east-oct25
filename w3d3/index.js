const express = require("express");
const cookieParser = require("cookie-parser");
const { listOfUsers, userDatabaseIsh } = require("./helpers/userDB");
const generateUserHelpers = require("./helpers/userHelpers");
const { authenticateUserArr, authenticateUserObj, getUserObject } =
	generateUserHelpers(userDatabaseIsh);
const userDB = {};
const app = express();
const port = 3000;

app.use(express.static("public")); // Static files (css / images)
app.use(express.urlencoded({ extended: false })); // Parses the body of a form request string in an object
app.use(cookieParser());

app.set("view engine", "ejs"); //

app.get("/", (req, res) => {
	const { userId } = req.cookies;

	const currentUser = getUserObject(userId);

	const templateVars = {
		avatar: currentUser.avatar_image,
		email: currentUser.email,
	};
	res.render("index", templateVars);
});

app.post("/login", (req, res) => {
	// Email & Password are in req.body
	// const email = req.body.email
	// const password = req.body.password
	const { email, password } = req.body;

	const result = authenticateUserObj(email, password);

	if (result.err) {
		console.log(result.err);
		return res.redirect("/");
	}
	res.cookie("userId", email);
	return res.redirect("/");
	// return res.json(result.data);
});

app.post("/logout", (req, res) => {
	res.clearCookie("userId");
	return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`));
