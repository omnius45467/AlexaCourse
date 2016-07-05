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
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'app/about/about.html',
      //   controller: 'AboutController',
      //   controllerAs: 'about'
      // })
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
      .state('/lesson/:id', {
          url: '/lesson/:id',
        templateUrl: 'app/lesson/lesson.html',
        controller: 'LessonController',
        controllerAs: 'lesson'
      });
      // .state('lesson', {
      //   url: '/lesson/',
      //   templateUrl: 'app/lesson/lesson.html',
      //   controller: 'LessonController',
      //   controllerAs: 'lesson'
      // });

    $urlRouterProvider.otherwise('/');
  }

})();
