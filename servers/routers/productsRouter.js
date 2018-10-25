/**
 * productsRouter.js
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line

router.get('/', (req, res) => {
  res.render('products.pug', {});
});

router.post('/', (req, res) => {

});

module.exports = router;
