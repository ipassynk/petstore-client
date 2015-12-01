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
        if (val === 'true') {
          element.attr('aria-busy', 'true');
          element.text('Working...');
          element.prop('disable', true);
        }
        else {
          element.attr('aria-busy', 'false');
          element.prop('disable', false);
          element.text(orig);
        }
      });
    }
  }

})();
