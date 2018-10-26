(function() {
    var checkoutVue = new Vue({
      el: '#checkoutVue',
      data: {
        productName: null,
        category: null,
        price: null,
        quantity: null,
        checkoutItems: []
      },
      created: function() {
        var self = this;
        console.log(self.id);
        axios.get('http://localhost:5000/api/checkout')
          .then(res => {
            self.checkoutItems = res.data;
          })
          .catch(err => {
            self.checkoutItems = [];
          });
      },
      methods: {
        buyProduct: function(product) {
          var self = this;
          var productData = {
            id: product.id,
            productName: product.productName,
            category: product.category,
            price: product.price,
            quantity: product.quantity
          };
          axios.post('/checkout', productData)
            .then(res => {
              console.log(res);
              //product.data.replace('/checkout');
              location.replace('/checkout');
            })
            .catch(err => {
            });
        }
      }
    });
    console.log(checkoutVue);
  })();