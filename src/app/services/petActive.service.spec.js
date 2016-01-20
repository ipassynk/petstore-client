(function () {
  'use strict';

  describe('petActive service', function () {

    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$httpBackend', 'petActive', 'Pet');
    });

    it('should be to show success alert on success', function () {
      var spy = sinon.spy(alertService, 'addAlert');
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(201);
      petActive.delete('1');
      $httpBackend.flush();
      expect(spy.args[0].type).to.equal('success');
    });

    it('should be to show fail alert on fail', function () {
      var spy = sinon.spy(alertService, 'addAlert');
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(500);
      petActive.delete('1');
      $httpBackend.flush();
      expect(spy.args[0].type).to.equal('danger');
    });

    it('should remove pet reference after delete', function () {
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(201);
      petActive.pet = new Pet();
      petActive.delete('1');
      $httpBackend.flush();
      expect(petActive.pet).to.be.null;
    });

    it('should not remove pet reference on delete fail', function () {
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(500);
      petActive.pet = new Pet();
      petActive.delete('1');
      $httpBackend.flush();
      expect(petActive.pet).to.not.be.null;
    });
  });
})();

