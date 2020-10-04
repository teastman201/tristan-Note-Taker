let path = require("path")
let notePath = "../public/notes.html";
let indexpath = "../public/index.html";

module.exports = function (app) {
    app.get("/notes", function (req, res) {
        // console.log("testNotes")
        res.sendFile(path.join(__dirname, notePath));
    });

    app.get("*", function (req, res) {
        // console.log("testIndex")
        res.sendFile(path.join(__dirname, indexpath));
    });
}