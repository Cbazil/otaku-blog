var express = require('express');
var app = express();
var path = require('path');
// var router = express.Router();
var bodyParser = require('body-parser');

// var Pokemon = require('./db.json');

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var viewRouter = require('./routes/view');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');
var archiveRouter = require('./routes/archive');
var log_onRouter = require('./routes/log_on');

// var signinRouter = require('./routes/log-on');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyParser Middleware
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//this is not needed if you have bodyParser
//express middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//register routes after middleware
app.use('/', indexRouter);
app.use('/create', createRouter);
app.use('/view', viewRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);
app.use('/archive', archiveRouter);
app.use('/log_on', log_onRouter);


module.exports = app;
app.listen(8080);