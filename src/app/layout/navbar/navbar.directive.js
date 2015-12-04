(function() {
  'use strict';

  angular
    .module('petstore')
    .directive('psNavbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      replace:true,
      restrict: 'E',
      templateUrl: 'app/layout/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      //var vm = this;
    }
  }

})();
