(function () {
  'use strict';

  angular
    .module('petstore')
    .directive('psBusyButton', psBusyButton);

  /** @ngInject */
  function psBusyButton() {
    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      var orig = element.text();
      attrs.$observe('psBusyButton', function (val) {
        val  === "true" ? element.text("Working. Please wait...") : element.text(orig);
      });
    }
  }

})();
