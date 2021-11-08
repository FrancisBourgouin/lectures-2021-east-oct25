// Source of webpage
// A host of information
// Many tasks (hardware / software)
//

// A server serves <- client
// Relative state

// CLIENT    SERVER
// TV ----- COMPUTER ------- NAS
//           CLIENT          SERVER

// Client & Server interaction (request/response) events <- http
// .on(...) stdin / stdout -> readline

const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
	// console.log("Request received!", req);
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(
		JSON.stringify({
			data: "Hello World!",
			currentUrl: req.url,
			method: req.method,
			headers: req.headers,
		})
	);
});

server.listen(8000, () => {
	console.log("Server Started and listening!");
});
