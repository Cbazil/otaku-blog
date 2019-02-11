var express = require('express');
var router = express.Router();

var Posts = require('../db.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: "All Pokemon"});

// });

router.get('/', function (req, res, next) {

    let data = {
        title: 'All Pokemon',
        posts: Posts, 
        message: false,
    }

    res.render('index', data);

});

module.exports = router;