// DEPENDENCIES
const express = require("express");
const { v4: uuidv4 } = require('uuid');

// Set port
const PORT = process.env.PORT || 3001;
// Instantiate the server
let app = express();


// Sets Express app to handle parse
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Reading public folder
app.use(express.static('public'));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

//Listening to start server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });