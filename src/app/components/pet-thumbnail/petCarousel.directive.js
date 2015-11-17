(function () {
  'use strict';

  angular
    .module('petstore')
    .directive('psPetCarousel', psPetCarousel);

  /** @ngInject */
  function psPetCarousel() {

    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/components/pet-thumbnail/pet-carousel.html',
      controller: PetCarouselController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        images: '='
      }
    };

    return directive;

    /** @ngInject */
    function PetCarouselController() {
      debugger;
      var vm = this;
      vm.slides = [];

      vm.interval = 5000;
      vm.noWrapSlides = false;

      function addSlide(image) {
        vm.slides.push({
          image: image
        });
      };
      vm.images.forEach(addSlide)
    }
  }
})();
