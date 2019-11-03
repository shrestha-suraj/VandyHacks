const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/api/signin', (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                res.send({
                    error: "The provided email is not registered"
                })
            } else {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    res.send({
                        message: `Welcome back`,
                        data: user
                    })
                } else {
                    res.send({
                        error: "Your provided password is incorrect"
                    });
                }
            }
        })
        .catch((err) => {
            res.send({
                error: "User authentication failed!"
            });
        })
})

router.get('/api/user-roles/:baseUserId', (req, res) => {
    const baseUserId = req.params.baseUserId;
    let availableRoles = [1];
    Promise.all([
        Driver.findOne({ baseUserId }),
        Owner.findOne({ baseUserId })
    ])
        .then(([driver, owner]) => {
            if (driver) {
                availableRoles.push(2);
            }

            if (owner) {
                availableRoles.push(3);
            }

            res.send({
                message: "Successfully get user's available roles",
                data: availableRoles
            })
        })
        .catch(err => {
            res.send({
                error: err.message
            })
        })
})

module.exports = router;