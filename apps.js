/**
 * Online Shop Project
 */
const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;

const indexRouter = require('./servers/routers/indexRouter');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

// NOTE: The __dirname is important for setting up the directory of the views
app.set('views', path.join(__dirname, 'servers/views'));
app.set('view engine', 'pug');

app.use('/', (req, res, next) => {
    req.viewModel = {
      title: 'Yunyon - Online Shopping'
    };
    next();
});

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});

app.use('/', indexRouter);