let noteData = require("../../../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {

        res.json(noteData);
        fs.readFileSync(path.join(__dirname, "../../../db/db.json"));
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
            // let deleteId = noteAdd.id;
            console.log(noteAdd);
        }

        function loop(noteData) {
            console.log("testLoop")
            for (var i in noteData) {
                var c = noteData[i];
                if (typeof c === 'object') {
                    if (c.length === undefined) {
                        //c is not an array
                        addIdentifier(c);
                    }
                    loop(c);
                }
            }
        }
        loop(noteData);
    })

    app.delete("/api/notes/:id", function (req, res) {
        let id = parseInt(req.params.id)
        delete id;
        console.log("testDelete");
        console.log(id);

        // delete 

    })
}