(function () {
  'use strict';

  angular
    .module('alexaCourse')
    .controller('LessonController', LessonController);

  /** @ngInject */
  function LessonController($timeout, Lessons) {
    // debugger;
    var vm = this;
    vm.lessons = Lessons.lessons;
    activate();
    function activate() {
      findLesson($stateParams);
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function findLesson() {
      var lesson = null;
      angular.forEach(Lessons, function (_lesson) {
        if (_lesson.id === parseInt($stateParams.lessonId, 10)) {
          lesson = _lesson;
        }
      });
      console.log(lesson);
      return lesson;
    }
  }
})();
