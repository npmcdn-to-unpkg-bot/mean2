var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occoured',
                error: err
            });
        }
        if (!doc) {
            return req.status(404).json({
                title: 'User not found',
                error: {message: 'User counld not be found'}
            });
        }
        if (!passwordHash.verify(req.body.password, doc.password)) {
            return req.status(404).json({
                title: 'Could not sign you in',
                error: {message: 'Invalid password'}
            });
        }
        var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: doc._id
        });
    });
});

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });

    user.save(function (err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occoured',
                error: err
            });
        }
        res.status(200).json({
            message: 'SignUp Success',
            obj: result
        });
    });
});

module.exports = router;