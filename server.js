// DEPENDENCIES
const express = require("express");

const app = express();

const apiRoutes =require("./Routes/apiRoutes");
const htmlRoutes =require("./Routes/htmlRoutes");

// Set port
const PORT = process.env.PORT || 3000;

// Sets Express app to handle parse
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Reading public folder
app.use(express.static(__dirname + '/public'));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Listening to start server
app.listen(PORT, () => console.log('listening on ${PORT}'));