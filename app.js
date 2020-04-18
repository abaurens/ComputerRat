const path = require('path');

const express = require('express');
let app = express();


app.use(express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
	return res.sendfile("./views/index.html")
});

app.listen(3000, function () {
	console.log("Listening on port 3000");
});