(function () {
  function LoginService($q, $http, CredentialService, PathStack) {

    this.hasLogin = function () {
      var credentials = CredentialService.load();
      console.log('has login check:', credentials);
      if (!credentials) {
        PathStack.push('/login');
        return false;
      }
      return true;
    };

    this.login = function (credentials) {
      var deferred = $q.defer();
      /**
       * real case
       */
      // $http.post('/login', credentials).success(function (result) {
      //   CredentialService.save(result);
      //   deferred.resolve();
      // }).error(function () {
      //   deferred.reject();
      // });

      /**
       * simulation case
       */
      var result = {
        userId: '0001',
        nickname: 'tom',
        accessToken: 'asdf129304ljasdop234'
      };
      CredentialService.save(result);
      deferred.resolve();
      // case end

      return deferred.promise;
    };

  }

  angular.module('app').service('LoginService', LoginService);
})();
