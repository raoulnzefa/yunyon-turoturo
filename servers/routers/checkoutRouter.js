/**
 * indexRouter
 */
const express = require('express');
const router = express.Router();
const SimpleJsonStore = require('simple-json-store');

router.get('/', function getIndexPage(req, res) {
    let viewModel = req.viewModel;
    res.render('checkout.pug', viewModel);
});

router.post('/', (req, res) => {
    res.send('test');
});

module.exports = router;
