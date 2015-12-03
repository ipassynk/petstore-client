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
        templateUrl: 'app/layout/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
/*        data: {
          requireLogin: true
        }*/
      })
      .state('container.home', {
        url: '/',
        views: {
          'main@container': {
            templateUrl: 'app/states/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
          }
        }
      }).state('container.add', {
        url: '/add',
        views: {
          'main@container': {
            templateUrl: 'app/states/add/add.html',
            controller: 'AddController',
            controllerAs: 'add'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
