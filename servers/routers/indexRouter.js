/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  res.render('index.pug', viewModel);
});

router.get('/', (req, res) => {
  res.send('Online Shop');
});

router.post('/', (req, res) => {
  // code here
});

module.exports = router;
