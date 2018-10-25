(function() {
  var productsVue = new Vue({
    el: '#productsVue',
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
        .then(function(res) {
          console.log("test");
          self.products = res.data;
        })
        .catch(function(err) {
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
      }
    }
  });
  console.log(products);
})();
