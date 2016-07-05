(function() {
  'use strict';

  angular
    .module('alexaCourse')
    .directive('lesson', lesson);

  /** @ngInject */
  function lesson() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/lesson/lesson.html',
      scope: {
        creationDate: '='
      },
      controller: LessonController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function LessonController() {
      var vm = this;
      var marked = marked();

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.title = marked('_lesson_ title');

    }
  }

})();
