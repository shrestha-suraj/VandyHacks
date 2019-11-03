var express = require('express');
var router = express.Router();
var moment = require('moment');
const User = require('../models/User');


//Creates an order from user view 
router.post('/api/habcal/', function (req, res) {
    const userId = req.body.userId;

})


module.exports = router;