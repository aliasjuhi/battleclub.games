require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const routes = require('./routes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(3015,  function () { 
  console.log('app Stats and Search on port 3015') 
}) 
