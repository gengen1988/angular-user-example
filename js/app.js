(function () {
  // @ngInject
  function UserAuth($q, $location, LoginService) {
    if (!LoginService.hasLogin()) {
      return false;
    }
    return true;
  }

  function Logout($location, CredentialService) {
    CredentialService.clean();
    $location.path('/');
  }

  // @ngInject
  function config($routeProvider) {
    $routeProvider.otherwise('/');

    $routeProvider.when('/', {
      templateUrl: 'public.html'
    });

    $routeProvider.when('/private', {
      templateUrl: 'private.html',
      resolve: {
        UserAuth: UserAuth
      }
    });

    $routeProvider.when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });

    $routeProvider.when('/logout', {
      resolve: {
        Logout: Logout
      }
    });

    $routeProvider.when('/error', {
      templateUrl: 'error.html'
    });
  }

  angular.module('app', ['ngRoute', 'ngCookies']).config(config);
})();
