(function () {
  'use strict';

  angular
    .module('petstore')
    .directive('psAlerts', alerts);

  /** @ngInject */
  function alerts() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/alerts/alerts.html',
      controller: AlertsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AlertsController(alertService) {
      var vm = this;
      vm.alerts = alertService.alerts;
      vm.closeAlert = alertService.closeAlert;
    }
  }

})();
