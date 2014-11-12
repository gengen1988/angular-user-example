(function () {
  function PathStack($location) {
    var stack = [];

    this.push = function (path) {
      stack.push($location.path());
      $location.path(path);
    };

    this.pop = function () {
      $location.path(stack.pop());
    };

  }
  angular.module('app').service('PathStack', PathStack);
})();
