// DEPENDENCIES
const express = require("express");
const { v4: uuidv4 } = require('uuid');

// Variable for Express
const app = express();
// Set port
const PORT = process.env.PORT || 3000;

// Sets Express app to handle parse
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Reading public folder
app.use(express.static('public'));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

//Listening to start server
app.listen(PORT, () => console.log('listening on ${PORT}'));