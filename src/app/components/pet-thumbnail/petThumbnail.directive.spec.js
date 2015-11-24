(function () {
  'use strict';

  describe('directive psPetThumbnail', function () {
    var photoUrls = [
      "assets/pets/1.jpg",
      "assets/pets/2.jpg",
      "assets/pets/3.jpg",
      "assets/pets/4.jpg"
    ];
    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$compile', '$rootScope', 'petActive');
    });

    it('should be compiled', function () {
      var scope = $rootScope.$new();
      var el = $compile('<ps-pet-thumbnail></ps-pet-thumbnail>')(scope);
      $rootScope.$digest();
      var thumbnail = el.find('.pet-thumbnail');
      expect(thumbnail).to.exist;
    });

    it('should click on delete remove directive', function () {
      var scope = $rootScope.$new();
      var el = $compile('<ps-pet-thumbnail></ps-pet-thumbnail>')(scope);
      $rootScope.$digest();
      var closeBtn = el.find('.close');
      closeBtn.click();
      $rootScope.$digest();
      expect(el.contents().length).to.equal(1);
    });
  });
})();

