(function() {
  'use strict';

  angular
    .module('petstore')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, loginModal, $state) {

    $log.debug('runBlock end');


/*    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();
        // get me a login modal!
      }
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
        event.preventDefault();

        loginModal()
          .then(function () {
            return $state.go(toState.name, toParams);
          })
          .catch(function (error) {
            $log.error(error)
          });
      }
    });*/
  }

})();
