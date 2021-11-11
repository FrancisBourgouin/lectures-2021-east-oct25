const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const logger = require("morgan");
const salt = bcrypt.genSaltSync(10);
const userDatabaseIsh = require("./data/userData");
const {
	authenticateUser,
	fetchUserInformation,
} = require("./helpers/userHelpers");
const middlewareHelperGenerator = require("./helpers/middlewareHelpers");
const { cookieCheck } = middlewareHelperGenerator(
	userDatabaseIsh,
	fetchUserInformation
);
// if(NODE_ENV === "dev")
userDatabaseIsh["periodic@table.com"].password = bcrypt.hashSync(
	"hydrogen",
	salt
);
userDatabaseIsh["war@peace.com"].password = bcrypt.hashSync("potato", salt);

const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	cookieSession({
		name: "session",
		keys: ["I like security it's the best", "key2"],
	})
);
app.use(cookieCheck);

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/login", (req, res) => {
	// const email = req.body.email;
	// const password = req.body.password;
	// Extract the email & password from the body of the request
	const { email, password } = req.body;
	// Compare the extracted values against my databaseish
	const { data, error } = authenticateUser(userDatabaseIsh, email, password);

	if (error) {
		console.log(error);
		return res.redirect("/");
	}

	// res.cookie("email", email);
	req.session.email = email;
	return res.redirect("/vault");
});

app.post("/register", (req, res) => {
	const { email, name, password } = req.body;
	const newUser = {
		email,
		name,
		password: bcrypt.hashSync(password, salt),
	};
});

app.post("/logout", (req, res) => {
	// res.clearCookie('email')
	// req.session.email = null
	delete req.session.email;
	return res.redirect("/");
});

app.get("/vault", (req, res) => {
	// Check for existence of a cookie
	// const { email } = req.cookies;
	const { email } = req.session;
	const { data, error } = fetchUserInformation(userDatabaseIsh, email);
	// Fetch user information based on the value of the cookie

	// if (error) {
	// 	console.log(error);
	// 	return res.redirect("/");
	// }
	// Give values to templateVars
	const templateVars = {
		name: data.name,
		secret: data.secret,
	};
	// Render the vault template with the templateVars
	return res.render("vault", templateVars);
});

app.get("/dashboard", (req, res) => {
	// Check for existence of a cookie
	// const { email } = req.cookies;
	const { email } = req.session;
	// Fetch user information based on the value of the cookie
	const { data, error } = fetchUserInformation(userDatabaseIsh, email);

	// if (error) {
	// 	console.log(error);
	// 	return res.redirect("/");
	// }

	return res.json(data);
});

module.exports = app;
