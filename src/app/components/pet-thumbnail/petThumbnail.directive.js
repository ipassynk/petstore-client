(function() {
  'use strict';

  angular
    .module('petstore')
    .directive('psPetThumbnail', petThumbnail);

  /** @ngInject */
  function petThumbnail(petActive, Pet, alertService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pet-thumbnail/pet-thumbnail.html',
      controller: PetThumbnailController,
      controllerAs: 'vm',
      bindToController: true,
      scope: true
    };

    return directive;

    /** @ngInject */
    function PetThumbnailController() {
      var vm = this;
      vm.rating = 4;
      vm.active = petActive;

      vm.delete = petActive.delete;
    }
  }

})();
