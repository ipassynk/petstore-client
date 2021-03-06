(function () {
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
    function PetAddController($scope) {
      var vm = this;

      vm.add = add;

      function reset() {
        $scope.$broadcast('show-errors-reset');
        vm.data = {};
      }

      function add() {
        function tagMap(val, i) {
          return {id: i, name: val};
        };

        var pet = new Pet({
          name: vm.data.name,
          tags: vm.data.tags ? JSON.parse(vm.data.tags).map(tagMap) : [],
          status: vm.data.status ? 'available' : 'outofstock',
          photoUrls: [vm.data.image]
        });

        vm.busy = true;
        pet.$save().then((resp) => {
          alertService.addAlert({type: 'success', msg: "Well done! You successfully added " + vm.data.name});
        reset();
        })['catch'](function () {
          alertService.addAlert({type: 'danger', msg: "Sorry, the operation is failed. Try again!"});
        }) ['finally'](function () {
          vm.busy = false;
        });
      }
    }
  }
})();
