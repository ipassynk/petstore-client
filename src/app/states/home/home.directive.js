(function() {
  'use strict';

  angular
    .module('petstore')
    .directive('home', home);

  /** @ngInject */
  function home() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/states/home/home.html'
    };

    return directive;
  }
})();
