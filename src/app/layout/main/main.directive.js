(function() {
  'use strict';

  angular
    .module('petstore')
    .directive('main', main);

  /** @ngInject */
  function main() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/layout/main/main.html'
    };

    return directive;
  }
})();
