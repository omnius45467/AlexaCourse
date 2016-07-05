(function() {
  'use strict';

  angular
    .module('alexaCourse')
    .controller('DirectoryController', DirectoryController);

  /** @ngInject */
  function DirectoryController($timeout, Lessons) {
    var vm = this;
    vm.lessons = Lessons.lessons;
    activate();

    function activate() {
      rankLessons();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function rankLessons() {
      angular.forEach(vm.lessons, function(lessons) {
        lessons.rank = lessons.id;
      });
    }
  }
})();
