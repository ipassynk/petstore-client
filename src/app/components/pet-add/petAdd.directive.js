(function() {
  'use strict';

  angular
    .module('petstore')
    .directive('psPetAdd', petAdd);

  /** @ngInject */
  function petAdd(Pet, alertService) {

    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/components/pet-add/pet-add.html',
      controller: PetAddController,
      controllerAs: 'vm',
      bindToController: true,
      scope: true
    };

    return directive;

    /** @ngInject */
    function PetAddController(Pet) {
      var vm = this;
      vm.add = add;

      function add() {
        var pet = new Pet();
        pet.$save().then(function(aPet) {
          alertService.addAlert({type: 'success', msg: "Well done! You successfully added this pet"});
        });
      }
    }
  }
})();
