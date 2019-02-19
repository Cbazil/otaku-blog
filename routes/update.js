var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/:postId', function(req, res, next) {

    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts/" + req.params.postId,
    method: "GET",
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        //send a response message
        res.render('update', {message: false, post: JSON.parse(body)});
    });
  
});

router.post('/:postId', function(req, res, next) {

    // console.log(req.body)
    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts/"+ req.params.postId,
    method: "PATCH",
    form: {
        aniName: req.body.aniName,
        image: req.body.image_url,
        genre: req.body.genre,
        author: req.body.author,
        description: req.body.description,
    }
    }, function(error, response, body) {
        // console.log(body);
        //send a response message
        res.render('update', {message: 'Successfully Added.', post: JSON.parse(body)});
    });
})

module.exports = router;