var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var Users = require('../db.json');
var request = require("request");

router.get('/:postId', function(req, res, next) {
    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts/" + req.params.postId,
    method: "GET",
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        //send a response message
        res.render('view', {post: JSON.parse(body)});
    });
}),
/*
router.get('/:userId', function(req, res, next){
    //make a post request to our database
    request({
    uri: "http://localhost:8000/users/" + req.params.userId,
    method: "GET",
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        //send a response message
        res.render('view', {user: JSON.parse(body)});
    });
})
*/

module.exports = router;