require("dotenv").config();
const DiscordUser = require('../models/DiscordUser');
const DiscordServer = require('../models/DiscordServer');
const async = require('async');

const types = {
    user: DiscordUser,
    server: DiscordServer
};

exports.api_get = function (req, res) {
    if (req.params.api_key === process.env.API_KEY) {
        const type = req.body.type;
        const data = req.body;
        delete data['type'];
        if (types.hasOwnProperty(type)) {
            const obj = types[type]
            obj.findOne({
                _id: req.body._id
            }, function (err, returnData) {
                if (err || returnData == null) {
                    res.sendStatus(404);
                } else {
                    res.send(returnData);
                }
            });
        }
    } else {
        res.sendStatus(403);
    }

};

exports.api_post = async function (req, res) {
    const type = req.body.type;
    data = req.body;
    delete data['type'];
    if (req.params.api_key === process.env.API_KEY) {
        if (types.hasOwnProperty(type)) {
            const new_user = new types[type](data);
            new_user.save(function (err) {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    res.send(err);
                }
            });
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400);
    }
};

exports.api_patch = function (req, res) {
    if (req.params.api_key === process.env.API_KEY) {
        const type = req.body.type;
        const data = req.body;
        delete data['type'];
        if (types.hasOwnProperty(type)) {
            const obj = types[type];
            obj.updateOne({
                _id: req.body._id
            },
                data,
                function (err, results) {
                    if (!err) {
                        res.sendStatus(200);
                    } else {
                        res.sendStatus(400);
                    }
                }
            );
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(403);
    }
};

exports.api_delete = function (req, res) {
    if (req.params.api_key === process.env.API_KEY) {
        DiscordUser.deleteOne({
            _id: req.body._id
        }, function (err, status) {
            if (!err && status.deletedCount == 1) {
                res.sendStatus(200);
            } else {
                res.sendStatus(400);
            }
        })
    } else {
        res.sendStatus(404);
    }
};

