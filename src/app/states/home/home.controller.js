(function() {
  'use strict';

  angular
    .module('petstore')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;
  }
})();
