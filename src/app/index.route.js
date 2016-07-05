(function () {
  'use strict';

  angular
    .module('alexaCourse')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('directory', {
        url: '/directory',
        templateUrl: 'app/directory/directory.html',
        controller: 'DirectoryController',
        controllerAs: 'directory'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'DirectoryController',
        controllerAs: 'directory'
      })
      .state('lessons', {
        url: '/lessons',
        templateUrl: 'app/lesson/lesson.html',
        controller: 'LessonController',
        controllerAs: 'lesson'
      })
      .state('lessons.lesson', {
        url: '/:lessonId',
        resolve: {
          lesson: function (Lessons, $stateParams) {
            var lesson = null;

            angular.forEach(Lessons.lessons, function (_lesson) {
              if (_lesson.id === parseInt($stateParams.lessonId, 10)) {
                lesson = _lesson;
              }
            });

            return lesson;
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }

})();
