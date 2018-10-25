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
    methods: {
      addProduct: function() {
        let self = this;
        let productData = {
          productName: self.productName,
          category: self.category,
          price: self.price,
          quantity: self.quantity
        };
        axios.post('/', productData)
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
