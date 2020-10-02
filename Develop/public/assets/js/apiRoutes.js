let noteData = require("../../../db/db.json");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFileSync(path.join(__dirname, "../../../db/db.json"));
    })

    app.post("/api/notes", function (req, res) {
        noteData.push(req.body);

        function addIdentifier(target) {
            target.id = iterator;
            iterator++;
        }

        function loop(noteData) {
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
        loop(json);
    })

    app.delete("/api/notes/:id", function (req, res) {
        let id = parseInt(req.params.id)

        // delete 

    })
}