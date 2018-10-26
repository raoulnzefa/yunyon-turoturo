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

router.post('/', (req, res) => {
  let checkoutItems = store.get('checkout');
  products.push(newProduct);
  store.set('products', products);

  res.json(products);
});



router.put('/:id', (req, res) => {
  const id = req.params.id;
  var products = store.get('products');

  for(let i = 0; i < products.length; i++) {
    if(products[i].id == id) {
      products[i].productName = req.body.productName;
      products[i].category = req.body.category;
      products[i].price = req.body.price;
      products[i].quantity = req.body.quantity;
      break;
    }
  }

  store.set('products', products);
  res.json(products);
});

module.exports = router;
