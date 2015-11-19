(function () {
  'use strict';

  angular
    .module('petstore')
    .service('petActive', petActive);

  /** @ngInject */
  function petActive(Pet, alertService) {
    var that = this;
    this.pet;

    this.delete = function (petId) {
      Pet.delete({petId: petId}).$promise.then(function () {
        alertService.addAlert({
          type: 'success',
          msg: "Well done! You successfully deleted " + that.pet.name
        });
        that.pet = null;
      })['catch'](function (error) {
        alertService.addAlert({
          type: 'danger',
          msg: "We're sorry. We were unable to complete your request due to an unexpected error. Please try again."
        });
      });
    }
  }
})();
