/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line

<<<<<<< HEAD
router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  res.render('index.pug', viewModel);
=======
router.get('/', (req, res) => {
  res.send('Online Shop');
>>>>>>> 5e49fab8147d3f6a57e114ecb42edd272d889d49
});

router.post('/', (req, res) => {
  // code here
});

module.exports = router;
