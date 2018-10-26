const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./checkout.json', { checkoutItems: [] });

router.get('/', (req, res, next) => {
  console.log('Checkout API GET');
  next();
}, (req, res) => {
  res.json(store.get('checkoutItems'));
});

router.post('/', (req, res) => {
  let products = store.get('checkoutItems');
  let selectedProducts = {
    id: req.body.id,
    productName: req.body.productName,
    category: req.body.category,
    price: req.body.price,
    quantity: req.body.quantity
  };

  products.push(selectedProducts);
  store.set('checkoutItems', products);

  res.json(products);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const checkoutItems = store.get('checkoutItems');
  const products = checkoutItems.filter(checkoutItem => Number(checkoutItem.id) !== Number(id));

  store.set('checkoutItems', products);
  res.json(products);
});

module.exports = router;
