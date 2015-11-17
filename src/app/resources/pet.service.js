(function () {
  'use strict';

  angular
    .module('petstore')
    .factory('Pet', Pet);

  /** @ngInject */
  function Pet($resource, resourceError) {
    return $resource('/petstore/api/pet/:petId', {petId: '@id'}, {
      save: {
        interceptor: {responseError: resourceError}
      },
      delete: {
        interceptor: {responseError: resourceError}
      },
      get: {
        interceptor: {responseError: resourceError}
      }
    });
  }
})();
