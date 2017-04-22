// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// =============================================================
var userInfo = [{
  routeName: "Marcos",
  name: "Marcos",
  phoneNumber: "123-334-5551",
  email: "hellow@hehe.com",
  uniqueId: 1
}, {
  routeName: "Marcos",
  name: "Marcos",
  phoneNumber: "123-334-5551",
  email: "hellow@hehe.com",
  uniqueId: 1
}, {
  routeName: "Marcos",
  name: "Marcos",
  phoneNumber: "123-334-5551",
  email: "hellow@hehe.com",
  uniqueId: 1
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});


// Search for Specific Character (or all characters) - provides JSON
app.get("/api/table", function(req, res) {
  var chosen = req.params.table;
    res.json(userInfo);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});