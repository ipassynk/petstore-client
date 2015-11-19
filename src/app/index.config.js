(function() {
  'use strict';

  angular
    .module('petstore')
    //.config(loginConfig)
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

  function loginConfig($httpProvider) {

    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
      var loginModal, $http, $state;

      // this trick must be done so that we don't receive
      // `Uncaught Error: [$injector:cdep] Circular dependency found`
      $timeout(function () {
        loginModal = $injector.get('loginModal');
        $http = $injector.get('$http');
        $state = $injector.get('$state');
      });

      return {
        responseError: function (rejection) {
          if (rejection.status !== 401) {
            return rejection;
          }

          var deferred = $q.defer();

          loginModal()
            .then(function () {
              deferred.resolve($http(rejection.config));
            })
            .catch(function () {
              deferred.reject(rejection);
            });

          return deferred.promise;
        }
      };
    });
  }

})();
