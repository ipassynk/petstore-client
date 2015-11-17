(function () {
  'use strict';

  angular
    .module('petstore')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $httpBackend) {

    $log.debug('runBlock end');

    var addPet =
    {};


    $httpBackend.whenPOST('/petstore/api/pet').respond(addPet);

    var getPet = {
      "id": 1,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "Haireless guinea pig",
      "photoUrls": [
        "assets/pets/haireless_guinea1.jpg",
        "assets/pets/haireless_guinea2.jpg"
      ],
      "tags": [
        {
          "id": 0,
          "name": "rodents"
        },
        {
          "id": 1,
          "name": "small"
        },
        {
          "id": 2,
          "name": "kids"
        }
      ],
      "status": "available"
    };
    $httpBackend.whenGET('/petstore/api/pet/1').respond(getPet);


    var delPet = {};
    $httpBackend.whenDELETE('/petstore/api/pet/1').respond(delPet);

    $httpBackend.whenGET(/\.html$/).passThrough();

  }

})();
