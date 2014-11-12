(function () {

  function LoginController(LoginService, PathStack) {
    var vm = this;
    vm.login = function (username, password) {
      console.log('登录');
      LoginService.login({
        username: username,
        password: password
      }).then(function () {
        PathStack.pop();
      }, function () {
        alert('fail');
      });
    };
  }

  angular.module('app').controller('LoginController', LoginController);
})();
