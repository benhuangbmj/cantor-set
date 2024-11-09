const express = require("express");
const app = express();
app.listen(5500, () => {
	console.log("listening on port 5500");
});
app.get("/", (req, res) => {
	res.send("Hello World!");
});
