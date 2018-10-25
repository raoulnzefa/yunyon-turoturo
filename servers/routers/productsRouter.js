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

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const products = store.get('products');

  for(let i = 0; i < products.length; i++) {
    if(products[i].id === id) {
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

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const products = store.get('products');
  const newProducts = products.filter(note => Number(note.id) !== Number(id));

  store.set('products', newProducts);
  res.json(newProducts);
});

module.exports = router;
