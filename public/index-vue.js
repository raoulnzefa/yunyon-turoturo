(function() {
  var indexVue = new Vue({
    el: '#indexVue',
    data: {
      username: null,
      password: null,
      userType: null,
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
        console.log(product);
      }
    }
  });
  console.log(indexVue);
})();