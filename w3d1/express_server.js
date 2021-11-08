const express = require("express");
const path = require("path");

const app = express();

// REQ -----------MIDDLEWARE------------- RES
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const htmlThingy = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>COOL PAGE</title>
</head>
<body>
  <h1>USERIDVALUE</h1>
</body>
</html>`;

const interceptRequest = (req, res, next) => {
	console.log("INTERCEPTED", req.path);

	next();
};

app.use(interceptRequest);

// In the event of a GET request asking for the url of /
app.get("/", (req, res) => {
	console.log("got a get");
	res.json({ data: "GOOD JOB" });
});

// In the event of a GET request asking for the url of /admin
app.get("/admin", (req, res) => {
	console.log("got a get");
	// res.json({ data: "SECRET SECRET I GOT A SECRET" });
	res.send(htmlThingy);
});
// /users/bob => bob is req.params.userId
app.get("/users/:userId", (req, res) => {
	// Send request parameter called userId
	const userId = req.params.userId;
	const randomNumber = Math.floor(Math.random() * 10);
	const templateVars = { randomNumber, userId };
	// res.send(userId);
	res.render("users", templateVars);
});

// HELLO IT, HAVE YOU TRIED TURNING IT OFF AND ON AGAIN

app.listen(8000, () => {
	console.log("Server is listening!");
});
