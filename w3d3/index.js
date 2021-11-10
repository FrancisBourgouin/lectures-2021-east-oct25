const express = require("express");
const cookieParser = require("cookie-parser");
const userDatabaseIsh = require("./data/userData");
const userHelperGenerator = require("./helpers/userHelpers");
const { getUserInformation, fancyGetUserInformation, authenticateUser } =
	userHelperGenerator(userDatabaseIsh);

const app = express();
const port = 3000;

app.use(express.static("public")); // Static files (css / images)
app.use(express.urlencoded({ extended: false })); // Parses the body of a form request string in an object
app.use(cookieParser());
app.set("view engine", "ejs"); //

// req.cookies, res.cookie, res.clearCookie

app.get("/", (req, res) => {
	const { userEmail, isAuthenticated } = req.cookies;

	const currentUser = getUserInformation(userEmail);

	const templateVars = {
		avatar: currentUser.avatar,
		email: currentUser.email,
	};
	res.render("index", templateVars);
});

app.post("/login", (req, res) => {
	// Get the information from the body of the request
	// const email = req.body.email
	// const password = req.body.password

	const { email, password } = req.body;

	const { data, error } = authenticateUser(email, password);

	if (error) {
		console.log(error);
		return res.send("BAD");
	}

	res.cookie("userEmail", email);
	res.cookie("isAuthenticated", true);
	return res.redirect("/");
	// return res.json(data);
});

app.post("/logout", (req, res) => {
	res.clearCookie("userEmail");
	res.clearCookie("isAuthenticated");

	return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`));
