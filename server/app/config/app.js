const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const morgan     = require('morgan');
const consign    = require('consign');
const cors       = require('cors');
const passport   = require('passport');
const passConfig = require('./passport')(passport);
const jwt        = require('jsonwebtoken');
const config     = require('./index.js');
const database   = require('./database')(mongoose, config);

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.set('secret', config.secret);

consign({ cwd: 'app/modules' })
    .include('admin/models/index.js')
    .then('admin/controllers')
    .then('admin/middlewares')
    .then('admin/routes')
    .into(app)
;

// TODO: move to util folder as errorHandler.js!
app.use((err, req, res, next) => {
    if (!err) {
        return next();
    }

    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    });
});

module.exports = app;