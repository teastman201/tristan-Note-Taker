let notePath = "../db/db.json";
let noteFilePath = './db/db.json';
let noteData = require(notePath);

const fs = require("fs");
const path = require("path");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFileSync(path.join(__dirname, notePath));
        res.json(noteData);

        console.log("testNotes")

    })

    app.post("/api/notes", function (req, res1) {
        console.log("testNoteAdd")
        let iterator = 0;
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
        // console.log(s);
        console.log("raw data", s)
        let id = parseInt(req.params.id)
        // console.log("testDelete")
        s.splice(id, 1);
        // // console.log("testSplice")
        // console.log(s);
        fs.writeFileSync(noteFilePath, JSON.stringify(s), function (err) {

        })
        response.json('done');
    })
}