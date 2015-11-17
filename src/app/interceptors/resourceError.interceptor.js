(function () {
  'use strict';

  angular
    .module('petstore')
    .factory('resourceError', resourceError);

  /** @ngInject */
  function resourceError($log, $q) {
    return function resourceErrorHandler(data) {
      $log.error("resourceError interceptor: " + data);

      if(data.status === '404') {
        $log.error("Not found!!!");
      }
      else if(data.status === '400') {
        $log.error("Invalid request!!!");
      }

      return $q.reject(data);
    }
  }
})();
