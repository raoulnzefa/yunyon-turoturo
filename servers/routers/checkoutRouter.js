/**
 * checkoutRouter
 */
const express = require('express');
const router = express.Router();
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { products: [] });

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  res.render('checkout.pug', viewModel);
});

module.exports = router;
