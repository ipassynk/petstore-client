/* jshint -W117, -W030 */
(function () {
  'use strict';

  var controller;

  describe('controller HomeController', function () {
    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$controller');
    });

    beforeEach(function () {
      controller = $controller('HomeController');
    });

    it('should be created', function () {
      expect(controller).to.exist;
    });
  });
})();
