(function () {
  'use strict';

  class AlertService {
    constructor() {
      this.alerts = [];
    }

    addAlert(alert) {
      this.alerts.push(alert);
    }

    closeAlert(index) {
      this.alerts.splice(index, 1);
    }

    static instance(){
      return new AlertService();
    }
  }

  angular
    .module('petstore')
    .factory('alertService', AlertService.instance);
})();
