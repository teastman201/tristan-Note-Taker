const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

handleRequest = (req, res) => {
    res.end("It Works!! Path Hit: " + req.url);
}

app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});