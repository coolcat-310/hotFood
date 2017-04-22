var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('assests'));



// =============================================================
var userInfo = [{
  name: "Marcos",
  phoneNumber: "123-334-5551",
  email: "hellow@hehe.com",
  uniqueId: 1
}, {
  name: "Marcos",
  phoneNumber: "123-334-5551",
  email: "hellow@hehe.com",
  uniqueId: 1
}, {
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


app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/table", function(req, res) {
    res.json(userInfo);
  });



app.post("/api/new", function(req, res) {
  var newCustmer = req.body;


  console.log(newCustmer);

  userInfo.push(newCustmer);

  res.json(newCustmer);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});