var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function (req, res, next) {

    Message.find()
        .exec(function (err, docs) {
            if (err) {
                return req.status(404).json({
                    title: 'Unable to get messages',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Got data',
                obj: docs
            });
        });
});

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });

    message.save(function (err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            })
        }

        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, doc) {
        if (err) {
            return req.status(404).json({
                title: 'An error occoured',
                error: err
            });
        }
        if (!doc) {
            return req.status(404).json({
                title: 'Message not found',
                error: {message: 'message counld not be found'}
            });
        }
        doc.content = req.body.content;
        doc.save(function (err, result) {
            if (err) {
                return req.status(404).json({
                    title: 'An error occoured while updating',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Message updated',
                obj: result
            })
        });
    });
});

module.exports = router;