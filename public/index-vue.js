(function() {
  var indexVue = new Vue({
    el: '#indexVue',
    data: {
      productName: null,
      category: null,
      price: null,
      quantity: null,
      products: []
    },
    created: function() {
      var self = this;
      axios.get('http://localhost:5000/api/products')
        .then(res => {
          self.products = res.data;
        })
        .catch(err => {
          self.products = [];
        });
    },
    methods: {
      buyProduct: function(product) {
        var self = this;
        var checkoutProduct = {
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: product.quantity
        }
        axios.post('/api/checkout', checkoutProduct)
          .then(res => {
            console.log(product.id);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  });
  console.log(indexVue);
})();