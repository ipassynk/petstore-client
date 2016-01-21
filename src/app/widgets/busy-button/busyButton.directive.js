(function () {
  'use strict';

  /**
   * While the button is busy:
   * 1. change label to working
   * 2. make the button disabled
   * 3. add busy indicator for associate live aria (accessability)
   * 4. make the button hidden for accessability.
   *    otherwise screen reader will read "unavailable" because the button become disabled
   */
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
