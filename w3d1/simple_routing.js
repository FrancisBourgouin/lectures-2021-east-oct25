const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
	// console.log("Request received!", req);
	res.writeHead(200, { "Content-Type": "application/json" });
	const payload = {
		currentUrl: req.url,
		method: req.method,
		headers: req.headers,
	};
	if (req.url === "/admin") {
		payload.data = "SECRET SECRET I GOT A SECRET";
	}
	// if (req.url === "/users/1") {
	const userId = req.url.charAt(req.url.length - 1);
	const userList = ["bob", "bib", "booo", "baaa"];
	payload.data = `Hello ${userList[userId]}.`;
	// }
	res.end(JSON.stringify(payload));
});

server.listen(8000, () => {
	console.log("Server Started and listening!");
});

// Too much code
// Hard to get parameters
// Not verbose enough
// Need to stringify everything
