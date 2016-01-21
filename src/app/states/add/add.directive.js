(function() {
  'use strict';

  angular
    .module('petstore')
    .directive('add', add);

  /** @ngInject */
  function add() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/states/add/add.html'
    };

    return directive;
  }
})();
