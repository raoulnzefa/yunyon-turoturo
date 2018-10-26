(function() {
    var checkoutVue = new Vue({
      el: '#checkoutVue',
      data: {
        orderQuantity: null,
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
        checkoutProducts: function(checkoutItem) {
          var self = this;
          checkoutItem.orderQuantity = self.orderQuantity;
          checkoutItem.quantity = checkoutItem.quantity - checkoutItem.orderQuantity;
          console.log(checkoutItem.quantity);
          axios.put('/products/' + checkoutItem.id, checkoutItem)
          .then(res => {
            self.clear();
            location.reload();
          })
          .catch(err => {
          });
        }
      }
    });
    console.log(checkoutVue);
  })();