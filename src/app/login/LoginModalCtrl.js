(function () {
  'use strict';

  angular
    .module('petstore')
    .controller('LoginModalCtrl', LoginModalCtrl);

  /** @ngInject */
  function LoginModalCtrl($scope, $http) {

    this.cancel = $scope.$dismiss;

    this.submit = function (user, password) {
      $http({
        url: '/petstore/api/login',
        method: 'POST',
        data: {
          username:user,
          password:password
        }
      }).then(function (response) {
        $scope.$close(user);
      }, function (error) {
        $log.error(error);
      });
    };
  }
})();
