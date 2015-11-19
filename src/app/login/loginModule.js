(function () {
  'use strict';

  angular
    .module('petstore')
    .service('loginModal', loginModal);

  /** @ngInject */
  function loginModal($modal, $rootScope) {
    function assignCurrentUser(user) {
      $rootScope.currentUser = user;
      return user;
    }

    return function () {
      var instance = $modal.open({
        templateUrl: '/app/login/loginModalTemplate.html',
        controller: 'LoginModalCtrl',
        controllerAs: 'vm'
      });

      return instance.result.then(assignCurrentUser);
    };
  }
})();
