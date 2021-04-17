const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');
const characterRouter = require('./routes/characters');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/characters', characterRouter);

// catch 404 and forward to error handler
app.use('*', function (_, res) {
  res.status(404).json({
    success: false,
    error: true,
    message: 'Route not found',
    data: null,
  });
});

app.use(function (err, _, res, next) {
  if (res.headersSent) return next(err);

  if (err.message.search('JSON') !== -1) {
    err.message = 'Invalid JSON payload passed.';
  }

    res.status(err.status || 500).json({
      message: err.status < 500 ? err.message : 'Something went wrong!',
      status: 'error',
      data: null,
    });
});

module.exports = app;

module.exports = app;
