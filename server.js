var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

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
  uniqueId: 
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

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/table", function(req, res) {
    res.json(characters);



app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});