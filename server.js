// Get dependencies
var express = require("express");
var path = require("path");
var app = express();

var http = require("http").Server(app);
var io = require('socket.io')(http);

var bodyParser = require("body-parser");

var cors = require("cors");

const socketio = require('socket.io');

const socketEvents = require('./server/socket/socket');

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

// create MONGO connections

app = webService.setupMiddlewares(app);

app = webService.setupRestRoutes(app);

webService.setupMongooseConnections();
// mongo.setupMongooseConnections();

// Create HTTP server.
// var server = http.createServer(app);

// Listen on provided port, on all network interfaces.

var onlineUsers = new Map();

io.on('connection', (socket) => {
    console.log('#################');
    console.log('a user connected::', socket.id);
    console.log('#################');
    io.emit('user-connected', socket.id);

    socket.on('disconnect', function() {
        console.log('-----------------');
        console.log('user disconnected', socket.id);
        for (var user of onlineUsers) {
            console.log(user[0]);
            if (user[0] === socket.id) {
                console.log()
                onlineUsers.delete(socket.id);
            }
        }
        var onlineUsersArr = [];
        for (var usr of onlineUsers) {
            onlineUsersArr.push(usr[1])
        }
        io.emit('active-users', onlineUsersArr);
        console.log(onlineUsers, '-----------------');

    });

    socket.on('add-message', (msgObj) => {
        console.log(msgObj.sender, ' to ', msgObj.receiver, ' : ', msgObj.msg);
        console.log(msgObj.time);
        io.emit('message', { type: 'new-message', from: msgObj.sender, to: msgObj.receiver, text: msgObj.msg, time: msgObj.time });
        // Function above that stores the message in the database
        // databaseStore(message)
    });

    socket.on('add-user', (user) => {
        console.log('##########################################################################')

        onlineUsers.set(user.socketId, user.username);
        console.log('this is list->>>>\n', onlineUsers);
        var onlineUsersArr = [];
        for (var usr of onlineUsers) {
            onlineUsersArr.push(usr[1])
        }
        io.emit('active-users', onlineUsersArr);

        console.log('##########################################################################')

        // io.emit('message',
        //     { type: 'new-message', from: msgObj.sender, to: msgObj.receiver, text: msgObj.msg, time: msgObj.time }
        // );
        // Function above that stores the message in the database
        // databaseStore(message)
    });
});


http.listen(port, () =>
    console.log(`Hey Divesh Server running on localhost:${port}`)
);