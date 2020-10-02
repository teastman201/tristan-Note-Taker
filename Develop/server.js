const http = require("http");
const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();
const PORT1 = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function handleRequest(request, response) {
    response.end("It Works!! Path Hit: " + request.url);
}

app.get("/notes", function (req, res) {
    // console.log("testNotes")
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function (req, res) {
    // console.log("testIndex")
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT1, function () {
    console.log("App is listening on PORT: " + PORT1);
});
