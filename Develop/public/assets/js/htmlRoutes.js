let path = require("path")

module.exports = function (app) {
    app.get("/notes", function (req, res) {
        // console.log("testNotes")
        res.sendFile(path.join(__dirname, "../../notes.html"));
    });

    app.get("*", function (req, res) {
        // console.log("testIndex")
        res.sendFile(path.join(__dirname, "../../index.html"));
    });
}