(function () {
  // @ngInject
  function CredentialService($cookies) {

    this.clean = function () {
      delete $cookies.accessToken;
      delete $cookies.userId;
      delete $cookies.nickname;
    };

    this.load = function () {
      if ($cookies.accessToken === undefined) {
        return;
      }
      return {
        userId: $cookies.userId,
        accessToken: $cookies.accessToken,
        nickname: $cookies.nickname
      };
    };

    this.save = function (loginResult) {
      $cookies.accessToken = loginResult.accessToken;
      $cookies.userId = loginResult.userId;
      $cookies.nickname = loginResult.nickname;
    };

  }

  angular.module('app').service('CredentialService', CredentialService);
})();
