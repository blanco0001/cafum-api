var express = require('express');
var logger = require('morgan');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(function (req, res, next) {
    res.status(404).send({error: "Endpoint Not Found!"})
})

module.exports = app;