var express = require('express');
var router = express.Router();
var Users = require('../db.json');
var request = require("request");


// GET Log on page. 
 router.get('/', function(req, res) {
  res.render('register', {message: false});
 });
/*
 router.user('/', function(req, res, next) {
     //test if data is coming throught
     // res.send(req.body);

     //set a new dynamic id
     var id = Users.users.lenght;

     //make a post request to our database
     request({
         uri: "https://localhost:8000/users",
         method: "POST",
         form: {
            id: id,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
         }   
     }, function(error, response, body){
          //console.log(body);
          //send a responsive message
          res.render('register', {message: 'Successfully Added,'});
      });
 })

*/

module.exports = router;