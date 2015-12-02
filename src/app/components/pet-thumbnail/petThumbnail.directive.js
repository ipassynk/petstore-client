(function () {
  'use strict';

  angular
    .module('petstore')
    .directive('psPetThumbnail', petThumbnail);

  /** @ngInject */
  function petThumbnail(petActive) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pet-thumbnail/pet-thumbnail.html',
      controller: PetThumbnailController,
      controllerAs: 'vm',
      bindToController: true,
      scope: true,
      link: link
    };

    return directive;

    /** @ngInject */
    function PetThumbnailController() {
      var vm = this;
      vm.rating = 4;
      vm.active = petActive;

      vm.delete = petActive.delete;
    }

    function link(scope) {
      // when the element is removed - focus on body???
      scope.$watch('$destroy', function () {
        angular.element('body').focus();
      });
    }
  }

})();
