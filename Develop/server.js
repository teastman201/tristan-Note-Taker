const http = require("http");

const express = require("express");
const app = express();
const PORT1 = 8080;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static('public'));

handleRequest = (req, res) => {
    res.end("It Works!! Path Hit: " + req.url);
}

require("./public/assets/js/apiRoutes")(app);
require("./public/assets/js/htmlRoutes")(app);

app.listen(PORT1, function () {
    console.log("App is listening on PORT: " + PORT1);
});