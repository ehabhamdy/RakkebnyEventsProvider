var express = require("express");
var mongoose = require('mongoose');
var path = require("path");
var morgan = require("morgan");

var app = express();


Event = require('./models/events');

mongoose.connect('mongodb://localhost/rakkebny', {useMongoClient: true});
var db = mongoose.connection;


app.use(morgan("short"))


app.use(express.static(path.resolve(__dirname, "public")));

app.get('/api/events', function (req, res) {
    Event.getEvents(function (error, events) {
        if (error)
            throw error;
        else
            res.json(events);
    });
});


app.use(function (req, res) {
    res.status(404).send("404");
});

app.listen(8080, function(){
    console.log("App started on port 8080 ...");
});