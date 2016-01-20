(function () {
  'use strict';

  describe('AddController controller', function () {
    var controller;

    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$controller');
    });

    beforeEach(function () {
      controller = $controller('AddController');
    });

    it('should be created', function () {
      expect(controller).to.exist;
    });
  });
})();

