(function () {
  'use strict';

  describe('directive psPetCarousel', function () {
    var photoUrls = [
      "assets/pets/1.jpg",
      "assets/pets/2.jpg",
      "assets/pets/3.jpg",
      "assets/pets/4.jpg"
    ];
    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$compile', '$rootScope');
    });

    it('should be compiled', function () {
      var scope = $rootScope.$new();
      scope.photoUrls = photoUrls;
      var el = $compile('<ps-pet-carousel images="photoUrls"></ps-pet-carousel>')(scope);
      $rootScope.$digest();
      var carousel = el.find('.carousel');
      expect(carousel).to.exist;
    });

    it('should be created slides from photoUrls', function () {
      var scope = $rootScope.$new();
      scope.photoUrls = photoUrls;
      var el = $compile('<ps-pet-carousel images="photoUrls"></ps-pet-carousel>')(scope);
      $rootScope.$digest();
      var directiveScope = el.children().scope();
      expect(directiveScope.vm.slides.length).to.equal(photoUrls.length);
    });
  });
})();

