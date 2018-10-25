/**
 * productsRouter.js
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { products: [] });

router.get('/', (req, res) => {
  res.render('products.pug', {});
});

router.post('/', (req, res) => {
  let products = store.get('products');
  let newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    productName: req.body.productName,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity
  };

  products.push(newProduct);
  store.set('products', products);

  res.json(products);
});

module.exports = router;
