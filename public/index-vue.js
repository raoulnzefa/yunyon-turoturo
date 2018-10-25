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
    }
  });
  console.log(indexVue);
})();