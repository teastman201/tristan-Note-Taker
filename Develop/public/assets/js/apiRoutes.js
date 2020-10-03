let notePath = "../../../db/db.json"
let noteData = require(notePath);

const fs = require("fs");
const path = require("path");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteData);
        fs.readFileSync(path.join(__dirname, notePath));
        console.log("testNotes")

    })

    app.post("/api/notes", function (req, res) {
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
        fs.writeFile('./db/db.json', JSON.stringify(noteData), function (err) {
            console.log(err);
            // console.log(noteData);
        })
    })

    app.delete("/api/notes/:id", function (req, res) {
        let rawData = fs.readFileSync('./db/db.json');
        let s = JSON.parse(rawData);
        id = parseInt(req.params.id)
        // console.log(id)
        console.log("testDelete")

        var index = s.map(x => {
            // console.log(x.id)
            return x.id;
        })
        // .indexOf(id);

        s.splice(id, 1);
        // console.log(index);
        console.log("testSplice")
        console.log(s);

        // array methods to 

        fs.writeFile('./db/db.json', JSON.stringify(s), function (res, err) {
            // console.log(err);
            console.log("testWrite");
            console.log(JSON.stringify(s));

            // send new db.json file from .delete
            if (res.sendFile("./db", "db.json")) {
                console.log("testSendFile")
                console.log(err)
            } else {
                console.log("testSendFileFalse")
            }
            // review front end code
        })


    })
}