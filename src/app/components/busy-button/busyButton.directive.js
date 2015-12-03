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
      var busyAria =
        angular.element('<div role="region" class="sr-only" aria-live="assertive"></div>');
      element.parent().after(busyAria);
      var orig = element.text();

      attrs.$observe('psBusyButton', function (val) {
        if (val === 'true') {
          busyAria.text('Busy working button. Please wait...');
          element.text('Working...');
          element.prop('aria-hidden', 'true');
          element.prop('disable', true);
        }
        else {
          busyAria.text('');
          element.prop('disable', false);
          element.prop('aria-hidden', 'false');
          element.text(orig);
        }
      });
    }
  }

})();
