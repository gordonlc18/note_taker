const db = require("../db/db.json");
const path = require('path');
const express = require('express');

let app = express();


module.exports = function(app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"))
    });

    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
}