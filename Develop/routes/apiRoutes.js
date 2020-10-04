let notePath = "../db/db.json";
let noteFilePath = './db/db.json';
let noteData = require(notePath);

const fs = require("fs");
const path = require("path");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {

        res.json(noteData);
        fs.readFileSync(path.join(__dirname, notePath));
        console.log("testNotes")

    })

    app.post("/api/notes", function (req, res1) {
        console.log("testNoteAdd")
        let iterator = 0;
        let noteAdd = req.body;
        noteData.push(req.body);

        function addIdentifier(noteAdd) {
            noteAdd.id = iterator;
            iterator++;
            console.log(noteAdd);
        }

        function loop(noteData) {
            console.log("testLoop")
            for (var i in noteData) {
                var c = noteData[i];
                if (typeof c === 'object') {
                    if (c.length === undefined) {
                        addIdentifier(c);
                    }
                    loop(c);
                }
            }
        }
        loop(noteData);
        fs.writeFile(noteFilePath, JSON.stringify(noteData), function (err) {
            // console.log(err);
            res1.sendFile(path.join(__dirname, notePath));
            // console.log(noteData);
        })
    })

    app.delete("/api/notes/:id", function (req, response) {
        let rawData = fs.readFileSync(noteFilePath);
        let s = JSON.parse(rawData);
        id = parseInt(req.params.id)

        console.log("testDelete")
        var index = s.map(x => {
            return x.id;
        })

        s.splice(id, 1);
        console.log("testSplice")
        console.log(s);

        // fs.writeFile("../db/db.json", JSON.stringify(s), function (err) {
        //     // console.log("testWrite");
        //     // console.log(JSON.stringify(s));

        // })
    })
}