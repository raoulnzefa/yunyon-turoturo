/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./users.json', { users: [] });

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  res.render('index.pug', viewModel);
});

router.post('/', (req, res) => {
  // code here
});

module.exports = router;
