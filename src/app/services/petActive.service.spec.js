(function () {
  'use strict';

  describe('petActive service', function () {

    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$httpBackend', 'petActive', 'Pet', 'alertService');
    });

    it('should be to show success alert on success', function () {
      var spy = sinon.spy(alertService, 'addAlert');
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(201);
      petActive.pet = new Pet({name:'myname'});
      petActive.delete('1');
      $httpBackend.flush();
      expect(spy.withArgs({type:'success'}));
    });

    it('should be to show fail alert on fail', function () {
      var spy = sinon.spy(alertService, 'addAlert');
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(500);
      petActive.pet = new Pet({name:'myname'});
      petActive.delete('1');
      $httpBackend.flush();
      expect(spy.withArgs({type:'danger'}));
    });

    it('should remove pet reference after delete', function () {
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(201);
      petActive.pet = new Pet({name:'myname'});
      petActive.delete('1');
      $httpBackend.flush();
      expect(petActive.pet).to.be.null;
    });

    it('should not remove pet reference on delete fail', function () {
      $httpBackend.expectDELETE('/petstore/api/pet/1').respond(500);
      petActive.pet = new Pet({name:'myname'});
      petActive.delete('1');
      $httpBackend.flush();
      expect(petActive.pet).to.not.be.null;
    });
  });
})();

