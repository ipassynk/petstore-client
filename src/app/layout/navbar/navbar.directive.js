(function() {
  'use strict';

  const navbar = () => {
    var directive = {
      replace:true,
      restrict: 'E',
      templateUrl: 'app/layout/navbar/navbar.html',
      //controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function NavbarController() {
      //var vm = this;
    }
  };

  angular
    .module('petstore')
    .directive('psNavbar', navbar);

})();
