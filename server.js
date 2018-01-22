// Get dependencies
var express = require("express");
var path = require("path");
var app = express();

var http = require("http").Server(app);

var bodyParser = require("body-parser");

var cors = require("cors");

var mongo = require("./ConfigFiles/mongo");

// MONGO
// var mongo = require('./ConfigFiles/mongo');
var webService = require("./server/services/webapp.service");
var MongoClient = require("mongodb").MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Get port from environment and store in Express.
var port = process.env.PORT || "3000";
app.set("port", port);


app = webService.setupMiddlewares(app);

app = webService.setupRestRoutes(app);

// create MONGO connections
// webService.setupMongooseConnections();
mongo.setupMongooseConnections();

// Create HTTP server.
// var server = http.createServer(app);


http.listen(port, () =>
    console.log(`Hey Divesh Server running on localhost:${port}`)
);