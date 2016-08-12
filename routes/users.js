var express = require('express');
var router = express.Router();
var User = require('../models/user')
var passwordHash = require('password-hash')

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