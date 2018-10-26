(function() {
  var productVue = new Vue({
    el: '#productVue',
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
      clear: function() {
        var self = this;
        self.productName = null;
        self.category = null;
        self.price = null;
        self.quantity = null;
      },
      updateProduct: function(product) {
        var self = this;
        self.productName = product.productName;
        self.category = product.category;
        self.price = product.price;
        self.quantity = product.quantity;
        localStorage.setItem('id', product.id);
      },
      deleteProduct: function(product) {
        var self = this;
        axios.delete('/products/' + product.id)
          .then(res => {
            var index = -1;
            for(var i = 0; i < self.products.length; ++i) {
              if(Number(self.products[i].id) === Number(product.id)) {
                index = i;
                break;
              }
            }
            self.products.splice(index, 1);
            self.clear();
          })
          .catch(err => {
          });
      },
      saveProduct: function() {
        var self = this;
        var id = localStorage.getItem('id');
        var updatedData = {
          productName: self.productName,
          category: self.category,
          price: self.price,
          quantity: self.quantity
        };
        axios.put('/products/' + id, updatedData)
          .then(res => {
            self.products = updatedData;
            self.clear();
          })
          .catch(err => {
          });
          localStorage.clear();
      }
    },
  });
  console.log(productVue);
})();
