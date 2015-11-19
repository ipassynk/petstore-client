(function() {
  'use strict';

  /**
   */
  describe('directive busy-button', function() {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('petstore'));
    beforeEach(inject(function($compile, $rootScope) {
      // spyOn(_$window_, 'moment').and.callThrough();
      // $window = _$window_;

      el = angular.element('<ps-busy-button="test"></ps-busy-button>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });
  });
})();
