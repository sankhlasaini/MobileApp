const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const mongoose = require('mongoose');
const appRoutes = require('./webapp.router');
const logger = require('./../../applogger');
const config = require('./../../ConfigFiles/mongoConfig');


function createApp() {
    const app = express();
    return app;
}

function setupRestRoutes(app) {
    //  MOUNT YOUR REST ROUTE HERE
    //  Eg: app.use('/resource', require(path.join(__dirname, './module')));

    appRoutes.useRoutes(app);

    app.use(function(req, res) {
        let err = new Error('Resource not found');
        err.status = 404;
        return res.status(err.status).json({
            error: err.message
        });
    });

    app.use(function(err, req, res) {
        logger.error('Internal error in watch processor: ', err);
        return res.status(err.status || 500).json({
            error: err.message
        });
    });

    return app;
}

function setupMiddlewares(app) {
    //  For logging each requests
    // app.use(morgan('dev'));

    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    const compression = require('compression');
    app.use(compression());

    return app;
}

// App Constructor function is exported
module.exports = {
    createApp: createApp,
    setupRestRoutes: setupRestRoutes,
    setupMiddlewares: setupMiddlewares
};