const express       = require('express');
const path          = require('path');
const logger        = require('morgan');
const cors          = require('cors');
const auth          = require('./libs/auth');
const errorhandler  = require('errorhandler');
const errorHandler  = require('./libs/error-handler');

const authRouter      = require('./routes/auth.route');
const generatorRouter = require('./routes/generator.route');
const pipedRouter     = require('./routes/piped.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Enabling CORS.
app.use(cors());
// Authentication
app.use(auth());

// APIs
app.use('/api', authRouter);
app.use('/api', generatorRouter);
app.use('/api', pipedRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}

app.use(errorHandler);

process.on('uncaughtException', (err) => {
  console.error(err);
});

process.on('unhandledRejection', (err) => {
  console.error(err);
});

module.exports = app;
