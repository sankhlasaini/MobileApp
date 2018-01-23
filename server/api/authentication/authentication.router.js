var router = require('express').Router();
var jwt = require('jsonwebtoken');
var userCtrl = require('./../userCredential/userCredential.controller');
const logger = require('./../../../applogger');

// authentication of user
router.post('/', function(req, res) {
    let user = req.body;
    logger.info('Login Request : ', req.body)
    try {
        if (!user) {
            console.log('Invalid user');
            logger.error('Invalid User Data');
            throw new Error('Invalid inputs passed...!');
        }
        userCtrl.getUserData(user.email).then((successResult) => {
            if (successResult.length > 0) {
                console.log('\nUser found checking for Credential...');
                if (successResult[0].password === user.password) {
                    logger.info('User Authenticated : ', user.email);
                    let userDetails = {
                        username: successResult[0].username,
                    };
                    let userToken = jwt.sign(userDetails, "this is secret", {
                        expiresIn: 60 * 30
                    });
                    return res.status(201).send({ authToken: userToken, msg: 'user authenticated', success: true });
                } else {
                    logger.info('Password Wrong : ', user.email);
                    return res.status(201).send({ msg: 'password wrong', success: false });
                }
            } else {
                return res.status(201).send({ msg: 'user not found', success: false });
            }

        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.error('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
        return;
    }
});

module.exports = router;