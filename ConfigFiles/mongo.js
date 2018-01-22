const mongoose = require('mongoose');

var config = require('./mongoConfig');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


// MongoClient.connect(config.MONGO.mongoURL, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected to Database", db.s.databaseName);
//     db.close();
//     if (err) {
//         console.log('asdasdasdas')
//     }
// });


function setupMongooseConnections() {
    mongoose.connect(config.MONGO.mongoURL);

    mongoose.connection.on('connected', function() {
        console.log('Mongoose is now connected to ', config.MONGO.mongoURL);
    });

    mongoose.connection.on('error', function(err) {
        console.log('\nError in Mongoose connection: \n', err);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('\nMongoose is now disconnected..!\n');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log(
                'Mongoose disconnected on process termination'
            );
            process.exit(0);
        });
    });
}


module.exports = {
    config: config,
    setupMongooseConnections: setupMongooseConnections
};