(function () {
  'use strict';

  describe('Add directive', function () {

    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$rootScope', '$compile');
    });

    it('should be compiled', function () {
      var scope = $rootScope.$new();
      var el = $compile('<add></add>')(scope);
      $rootScope.$digest();
      var header = el.find('.page-header');
      expect(header).to.exist;
    });
  });
})();

