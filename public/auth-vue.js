(function() {
    var auth = new Vue({
      el: '#auth',
      data: {
        userName: null,
        passWord: null
      },
      methods: {
        logIn: function() {
          let self = this;
          let userData = {
            userName: self.userName,
            passWord: self.passWord
          };
          axios.post('/users', userData)
            .then(res => {
              self.users = res.data;
              self.clear();
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    });
    console.log(users);
  })();