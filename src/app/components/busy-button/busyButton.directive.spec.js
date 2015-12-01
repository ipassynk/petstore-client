(function () {
  'use strict';

  /**
   */
  describe('directive psBusyButton', function () {
    beforeEach(function () {
      bard.appModule('petstore');
      bard.inject('$compile', '$rootScope');
    });

    it('should be compiled', function () {
      var scope = $rootScope.$new();
      scope.loading = false;
      var el = $compile('<button ps-busy-button="{{ loading}}">Hi</button>')(scope);
      $rootScope.$digest();
      expect(el.text().trim()).to.not.equal('');
    });

    it('should be in waiting state if loading is true', function () {
      var scope = $rootScope.$new();
      scope.loading = true;
      var el = $compile('<button ps-busy-button="{{ loading }}">Hi</button>')(scope);
      $rootScope.$digest();
      expect(el.text().trim()).to.equal('Working...');
    });

    it('should be in notmail state if loading is false', function () {
      var scope = $rootScope.$new();
      scope.loading = false;
      var el = $compile('<button ps-busy-button="{{ loading }}">Hi</button>')(scope);
      $rootScope.$digest();
      expect(el.text().trim()).to.equal('Hi');
    });

    it('should change label when loading changed', function () {
      var scope = $rootScope.$new();
      scope.loading = false;
      var el = $compile('<button ps-busy-button="{{ loading }}">Hi</button>')(scope);
      $rootScope.$digest();

      expect(el.text().trim()).to.equal('Hi');

      scope.loading = true;
      $rootScope.$digest();
      expect(el.text().trim()).to.equal('Working...');
    });
  });
})();
