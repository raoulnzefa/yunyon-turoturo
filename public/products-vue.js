(function() {
  var products = new Vue({
    el: '#products',
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
      addProduct: function() {
        var self = this;
        var productData = {
          productName: self.productName,
          category: self.category,
          price: self.price,
          quantity: self.quantity
        };
        axios.post('/products', productData)
          .then(res => {
            self.products = res.data;
            self.clear();
          })
          .catch(err => {
            console.log(err);
          });
      },
      updateProduct: function(product) {
        var self = this;
        axios.put('/products' + product.id)
          .then(res => {
            for(var i = 0; i < self.products.length; i++) {
              if(Number(self.products[i].id) === Number(product.id)) {
                self.products = res.data;
                break;
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      deleteProduct: function(product) {
        var self = this;
        axios.delete('/products' + product.id)
          .then(res => {
            var index = -1;
            for(var i = 0; i < self.product.length; ++i) {
              if(Number(self.product[i].id) === Number(product.id)) {
                index = i;
                break;
              }
            }
            self.product.splice(index, 1);
          })
          .catch(err => {
          });
      }
    }
  });
  console.log(products);
})();
