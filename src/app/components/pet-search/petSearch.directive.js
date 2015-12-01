(function () {
  'use strict';

  angular
    .module('petstore')
    .directive('psPetSearch', petSearch);

  /** @ngInject */
  function petSearch(petActive) {

    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/components/pet-search/pet-search.html',
      controller: PetSearchController,
      controllerAs: 'vm',
      bindToController: true,
      scope: true
    };

    return directive;

    /** @ngInject */
    function PetSearchController(Pet) {
      var vm = this;
      vm.petId;
      vm.busy = false;
      vm.search = search;

      function search() {
        vm.busy = true;

        Pet.get({'petId': vm.petId}).$promise.then(function (aPet) {
          petActive.pet = aPet;
        })['finally'](function () {
          vm.busy = false;
        });
      }
    }
  }
})();
