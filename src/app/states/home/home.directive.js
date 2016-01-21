(function() {
  'use strict';

  const home = () => {
    return {
      restrict: 'EA',
      templateUrl: 'app/states/home/home.html'
    };
  };

  angular
    .module('petstore')
    .directive('home', home);
})();
