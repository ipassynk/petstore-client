(function () {
  'use strict';

  angular
    .module('petstore')
    .factory('pet', pet);

  /** @ngInject */
  function pet($resource, resourceError) {
    return $resource('/petstore/api/pet', null, {
      query: {
        isArray: true,
        cache: true,
        interceptor : {responseError : resourceError}
      }
    });
  }
})();
