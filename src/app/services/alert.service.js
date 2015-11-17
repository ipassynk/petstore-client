(function () {
  'use strict';

  angular
    .module('petstore')
    .service('alertService', alertService);

  /** @ngInject */
  function alertService() {
    this.alerts = [];

    this.addAlert = function (alert) {
      this.alerts.push(alert);
    };

    this.closeAlert = function (index) {
      this.alerts.splice(index, 1);
    };
  }
})();
