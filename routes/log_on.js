var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require("request");

/* GET Log on page. */
 router.get('/', function(req, res) {

  res.render('log_on');

 });

module.exports = router;