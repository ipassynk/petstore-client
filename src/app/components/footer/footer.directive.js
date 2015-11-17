(function () {
  'use strict';

  angular
    .module('petstore')
    .directive('psFooter', psFooter);

  /** @ngInject */
  function psFooter() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/footer/footer.html',
      controller: FooterController,
      controllerAs: 'vm',
      scope: true
    };

    return directive;

    /** @ngInject */
    function FooterController() {
      var vm = this;
    }
  }

})();
