(function () {
  'use strict';

  describe('pet resource service', function () {

    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$httpBackend', 'Pet');
    });

    afterEach (function () {
      $httpBackend.verifyNoOutstandingExpectation ();
      $httpBackend.verifyNoOutstandingRequest ();
    })

    it('should be able to call get', function () {
      $httpBackend.expectGET('/petstore/api/pet/1').respond(201);
      var pet = Pet.get({'petId': 1});
      expect($httpBackend.flush).to.not.throws();
    });

    it('should be able to get pet', function () {
      $httpBackend.expectGET('/petstore/api/pet/1').respond({'petId':1});
      var pet = Pet.get({'petId': 1});
      $httpBackend.flush();
      expect(pet.petId).to.eq(1);
    });

    it('should be able to save new pet', function () {
      var expectData = function (data) {
        return angular.fromJson(data).name === "My name";
      };
      $httpBackend.expectPOST('/petstore/api/pet', expectData).respond(201);
      var pet = new Pet({name: "My name"});
      pet.$save();
      expect($httpBackend.flush).to.not.throws();
    });

    it('should be able to delete a pet', function () {
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(201);
      Pet.delete({petId: 1});
      expect($httpBackend.flush).to.not.throws();
    });
  });
})();

