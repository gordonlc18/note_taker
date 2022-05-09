const fs = require('fs');
const { v4: uuidv4} = require('uuid');

// Routing
module.exports = function (app) {

    // Get Request
    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {
            if (error) throw error;
            res.json(JSON.parse(data));
        });
    });

    // Post Request
    app.post('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {
            console.log(data);
            const db = JSON.parse(data);

            const newNote = {
                id: uuidv4(),
                ...req.body
            };

            db.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(db), function (error) {
                if (error) throw error;
                res.json(newNote);
            });
        });
    })
    app.delete('/api/notes/:id', function (req, res) {
        fs.readFile('./db/db.json', 'utf8', function (error, data) {
            
            const db = JSON.parse(data);
            console.log(db);
            const deletedNote = db.filter((note) => note.id !== req.params.id);
          
            fs.writeFile('./db/db.json', JSON.stringify(deletedNote), function (error) {
                if(error) throw error;
                
                res.json(deletedNote);
            })
        })
    });
}