(function() {
  'use strict';

  const add = () => {
    return {
      restrict: 'EA',
      templateUrl: 'app/states/add/add.html'
    };
  };

  angular
    .module('petstore')
    .directive('add', add);

})();
