/**
 * Online Shop Project
 */
const express = require('express');
//const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 5000;

const indexRouter = require('./servers/routers/indexRouter');
const productsRouter = require('./servers/routers/productsRouter');
const checkoutRouter = require('./servers/routers/checkoutRouter');
const productsAPI = require('./servers/apis/products-api');

//app.use(morgan('dev'));
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

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/checkout', checkoutRouter);
app.use('/api/products', productsAPI);

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});

