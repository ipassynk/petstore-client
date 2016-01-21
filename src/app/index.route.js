(function () {
  'use strict';

  angular
    .module('petstore')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('container', {
        abstract: true,
        template: '<main></main>'
      })
      .state('container.home', {
        url: '/',
        views: {
          'main@container': {
            template: '<home></home>'
          }
        }
      }).state('container.add', {
        url: '/add',
        views: {
          'main@container': {
            templateUrl: '<add></add>'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
