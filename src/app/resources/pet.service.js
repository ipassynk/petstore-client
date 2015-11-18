(function () {
  'use strict';

  angular
    .module('petstore')
    .factory('Pet', Pet);

  /** @ngInject */
  function Pet($resource, resourceError) {
    return $resource('/petstore/api/pet/:petId', {petId: '@id'}, {
      save: {
        method: 'POST',
        interceptor: {responseError: resourceError}
      },
      delete: {
        method: 'DELETE',
        interceptor: {responseError: resourceError}
      },
      get: {
        interceptor: {responseError: resourceError}
      }
    });
  }
})();
