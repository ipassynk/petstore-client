(function () {
  'use strict';

  describe('Home directive', function () {

    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$rootScope', '$compile');
    });

    it('should be compiled', function () {
      var scope = $rootScope.$new();
      var el = $compile('<home></home>')(scope);
      $rootScope.$digest();
      var el = el.find('.pet-home-jumbotron');
      expect(el).to.exist;
    });
  });
})();

