(function() {
  'use strict';

  angular
    .module('alexaCourse')
    .controller('DirectoryController', DirectoryController);

  /** @ngInject */
  function DirectoryController($timeout) {
    var vm = this;



    vm.lessons = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1467309575734;
    // vm.showToastr = showToastr;
    //
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
    //
    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    function getWebDevTec() {
      // vm.lessons = webDevTec.getTec();
      vm.lessons = [
        {
          id: 1,
          title: 'Day #1 - Introduction to Alexa',
          md: 'app/markdown/day_1/day_1.md',
          description: 'app/markdown/day_1/description_day_1.md',
          url: 'lesson/1',
          logo: 'alexa.png'

        },
        {
          id: 2,
          title: 'Day #2 - Introduction to Artificial Intelligence',
          md: 'app/markdown/day_2/day_2.md',
          description: 'app/markdown/day_2/description_day_2.md',
          url: 'lesson/2',
          logo: 'alexa.png'
        },
        {
          id: 3,
          title: 'Day #3 - Your First Skill',
          md: 'app/markdown/day_3/day_3.md',
          description: 'app/markdown/day_3/description_day_3.md',
          url: 'lesson/3',
          logo: 'alexa.png'
        },
        {
          id: 4,
          title: 'Day #4 - Your First Skill',
          md: 'app/markdown/day_4/day_4.md',
          description: 'app/markdown/day_4/description_day_4.md',
          url: 'lesson/4',
          logo: 'alexa.png'
        },
        {
          id: 5,
          title: 'Day #5 - Your First Skill',
          md: 'app/markdown/day_5/day_5.md',
          description: 'app/markdown/day_5/description_day_5.md',
          url: 'lesson/5',
          logo: 'alexa.png'
        },
        {
          id: 7,
          title: 'Day #7 - Your First Skill',
          md: 'app/markdown/day_7/day_7.md',
          description: 'app/markdown/day_7/description_day_7.md',
          url: 'lesson/7',
          logo: 'alexa.png'
        },
        {
          id: 8,
          title: 'Day #8 - Your First Skill',
          md: 'app/markdown/day_8/day_8.md',
          description: 'app/markdown/day_8/description_day_8.md',
          url: 'lesson/8',
          logo: 'alexa.png'
        },
        {
          id: 9,
          title: 'Day #9 - Your First Skill',
          md: 'app/markdown/day_9/day_9.md',
          description: 'app/markdown/day_9/description_day_9.md',
          url: 'lesson/9',
          logo: 'alexa.png'
        },
        {
          id: 10,
          title: 'Day #10 - Your First Skill',
          md: 'app/markdown/day_10/day_10.md',
          description: 'app/markdown/day_10/description_day_10.md',
          url: 'lesson/10',
          logo: 'alexa.png'
        },
        {
          id: 11,
          title: 'Day #11 - Your First Skill',
          md: 'app/markdown/day_11/day_11.md',
          description: 'app/markdown/day_11/description_day_11.md',
          url: 'lesson/11',
          logo: 'alexa.png'
        },
        {
          id: 12,
          title: 'Day #12 - Your First Skill',
          md: 'app/markdown/day_12/day_12.md',
          description: 'app/markdown/day_12/description_day_12.md',
          url: 'lesson/12',
          logo: 'alexa.png'
        },
        {
          id: 13,
          title: 'Day #13 - Your First Skill',
          md: 'app/markdown/day_13/day_13.md',
          description: 'app/markdown/day_13/description_day_13.md',
          url: 'lesson/13',
          logo: 'alexa.png'
        },
        {
          id: 14,
          title: 'Day #14 - Your First Skill',
          md: 'app/markdown/day_14/day_14.md',
          description: 'app/markdown/day_14/description_day_14.md',
          url: 'lesson/14',
          logo: 'alexa.png'
        },
        {
          id: 15,
          title: 'Day #15 - Your First Skill',
          md: 'app/markdown/day_15/day_15.md',
          description: 'app/markdown/day_15/description_day_15.md',
          url: 'lesson/15',
          logo: 'alexa.png'
        },
        {
          id: 16,
          title: 'Day #16 - Your First Skill',
          md: 'app/markdown/day_16/day_16.md',
          description: 'app/markdown/day_16/description_day_16.md',
          url: 'lesson/16',
          logo: 'alexa.png'
        },
        {
          id: 17,
          title: 'Day #17 - Your First Skill',
          md: 'app/markdown/day_17/day_17.md',
          description: 'app/markdown/day_17/description_day_17.md',
          url: 'lesson/17',
          logo: 'alexa.png'
        },
        {
          id: 18,
          title: 'Day #18 - Your First Skill',
          md: 'app/markdown/day_18/day_18.md',
          description: 'app/markdown/day_18/description_day_18.md',
          url: 'lesson/18',
          logo: 'alexa.png'
        },
        {
          id: 19,
          title: 'Day #19 - Your First Skill',
          md: 'app/markdown/day_19/day_19.md',
          description: 'app/markdown/day_19/description_day_19.md',
          url: 'lesson/19',
          logo: 'alexa.png'
        },
        {
          id: 20,
          title: 'Day #20 - Your First Skill',
          md: 'app/markdown/day_20/day_20.md',
          description: 'app/markdown/day_20/description_day_20.md',
          url: 'lesson/20',
          logo: 'alexa.png'
        }
      ];
      angular.forEach(vm.lessons, function(lessons) {
        lessons.rank = lessons.id;
      });
    }
  }
})();
