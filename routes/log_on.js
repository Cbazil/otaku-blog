var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require("request");

/* GET Log on page. */
 router.get('/log_on', function(req, res, next) {

  res.render('log_on');

 });

module.exports = router;