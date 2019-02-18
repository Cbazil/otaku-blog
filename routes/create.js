var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/', function(req, res, next) {
  res.render('create', {message: false});
});

router.post('/', function(req, res, next) {

    //test if data is coming through
    // res.send(req.body);

    //set a new dynamic id
    var id = Posts.posts.lenght;

    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts",
    method: "POST",
    form: {
        id: id,
        name: req.body.name,
        aniName: req.body.aniName,
        genre: req.body.genre,
        author: req.body.author,
        image: req.body.image_url,
        description: req.body.description,
    }
    }, function(error, response, body) {
        // console.log(body);
        //send a response message
        res.render('create', {message: 'Successfully Added.'});
    });
})

module.exports = router;