// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3006;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [{
    "customerName": "jen",
    "phoneNumber": "888",
    "customerEmail": "jajaj",
    "customerID": "jen"
}, {
    "customerName": "scott",
    "phoneNumber": "888",
    "customerEmail": "jajaj",
    "customerID": "scott"
},
    {
        "customerName": "manoj",
        "phoneNumber": "888",
        "customerEmail": "jajaj",
        "customerID": "manoj"

    }
];

var wait = [{
    "customerName": "gonza",
    "phoneNumber": "888",
    "customerEmail": "jajaj",
    "customerID": "asdf"

}];

var count = 0;

//
app.get("/", function(req, res) {
    count++;
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    count++;
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    count++;
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/wait", function(req, res) {
    return res.json(wait);
});

app.get("/api/count", function(req, res) {
    console.log(count);
    return res.json(count);
});


app.post("/api/clear", function(req, res) {
    wait = [];
    tables = [];

    console.log(tables);

    res.json({ tables, wait });

});

app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newtable = req.body;

    console.log(newtable);

    if (tables.length < 5) {
        tables.push(newtable);
        res.json(newtable);
    } else {
        wait.push(newtable);
        res.json(newtable);
    }
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});