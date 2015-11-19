(function() {
  'use strict';

  describe('directive petCarousel', function() {
    // var $window;
    var vm;
    var el;

    beforeEach(module('petstore'));
    beforeEach(inject(function($compile, $rootScope) {
      // spyOn(_$window_, 'moment').and.callThrough();
      // $window = _$window_;

      el = angular.element('<ps-pet-carousel images="[]"></ps-pet-carousel>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      //vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate members', function() {
     // expect(vm).toEqual(jasmine.any(Object));

      //expect(vm.images).toEqual(jasmine.any(Array));
      //expect(vm.images).toEqual(timeInMs);
    });
  });
})();
