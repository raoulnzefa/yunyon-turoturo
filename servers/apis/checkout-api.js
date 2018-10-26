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

/*router.post('/', (req, res) => {
    let products = store.get('checkoutItems');
    products.push(res.checkoutItems);
    store.set('products', products);
  
    res.json(products);
  });
*/

router.post('/', (req, res) => {
    let products = store.get('checkoutItems');
    let selectedProducts = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      productName: req.body.productName,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity
    };
  
    products.push(selectedProducts);
    store.set('checkoutItems', products);
  
    res.json(products);
  });
  
module.exports = router;
