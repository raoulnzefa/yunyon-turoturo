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
        if(checkoutItem.quantity > 0) {
          checkoutItem.quantity = checkoutItem.quantity - checkoutItem.orderQuantity;
        }
        console.log(checkoutItem.quantity);
        axios.put('/products/' + checkoutItem.id, checkoutItem)
          .then(res => {
            self.clear();
            //location.reload();
          })
          .catch(err => {
          });
        axios.delete('/checkout/' + checkoutItem.id)
          .then(res => {
            var index = -1;
            for(var i = 0; i < self.checkoutItems.length; ++i) {
              if(Number(self.checkoutItems[i].id) === Number(checkoutItem.id)) {
                index = i;
                break;
              }
            }
            self.checkoutItems.splice(index, 1);
          })
          .catch(err => {
          });
      }
    }
  });
  console.log(checkoutVue);
})();