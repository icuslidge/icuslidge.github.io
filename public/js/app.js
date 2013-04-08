/*jshint browser: true, globalstrict: true*/
/*global angular, console, $*/
'use strict';

// Declare app level module which depends on filters, and services
// var app = angular.module('myApp', ['myApp.services', 'myApp.directives'])
var app = angular.module('myApp', [])
  .config(['$routeProvider', '$locationProvider'
                           , function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home'
      })
      .when('/bio', {
        templateUrl: 'partials/bio'
      })
      .when('/portfolio', {
        templateUrl: 'partials/portfolio'
      })
      .when('/portfolio/:name', {
        templateUrl: 'dummy'
      , controller: 'MapCtrl'
      })
      .when('/gallery', {
        templateUrl: 'partials/gallery'
      // , controller: WorkCtrl
      })
      .when('/project', {
        templateUrl: 'partials/project'
      })
      .when('/post', {
        templateUrl: 'partials/post'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }])
  .controller('MapCtrl', function ($scope, $route, $routeParams, $compile) {
    $route.current.templateUrl = 'map/' + $routeParams.name;

    $.get($route.current.templateUrl, function (data) {
      $scope.$apply(function () {
        $('#dummy').html($compile(data)($scope));
      });
    });


    $scope.preventDefault = function ($event) {
      console.log($event);
      $event.preventDefault();
    };
  })
  .controller('MainCtrl', function ($scope, $rootScope) {

    // $rootScope.loading = false;
    // $scope.showSideBar = true;
    // $rootScope.$on('$routeChangeError', function(event, curr, prev, rejection) {
    //   if (!prev) {
    //     $location.path('/');
    //   } else {
    //     window.history.back();
    //   }
    // });
    // $rootScope.$on('$locationChangeStart', function() {
    //   $rootScope.loading = true;
    // });
    // $rootScope.$on('$routeChangeSuccess', function() {
    //   $rootScope.loading = false;
    //   // TODO: FIXME
    //   $scope.hideSideBar = !$route.current.$route ||
    //                 ($route.current.$route.templateUrl === 'partials/player') ||
    //                 ($route.current.$route.templateUrl === 'partials/profile');
    // });
    // $scope.isCurrentPath = function(path) {
    //   return path === $location.path();
    // };

    $rootScope.$on('$routeChangeSuccess', function () {
      $('.content')
        // Interrupt the fading animation if one is in progress
        .stop()
        // Fade in new partial
        .css({opacity:0})
        .animate({opacity:1}, 800);
    });
  })
  .directive('isotope', function ($timeout) {
    return function (scope, elem, attrs) {
      var isotopeOptions = {
        itemSelector : '.element',
        getSortData : {
          symbol : function( $elem ) {
            return $elem.attr('data-symbol');
          },
          category : function( $elem ) {
            return $elem.attr('data-category');
          },
          number : function( $elem ) {
            return parseInt( $elem.find('.number').text(), 10 );
          },
          weight : function( $elem ) {
            return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
          },
          name : function ( $elem ) {
            return $elem.find('.name').text();
          }
        }
      };

      $timeout(function () {
        // var $container = $('#container');
        var $container = elem;

        $container.isotope(isotopeOptions);

        var $optionSets = $('#options .option-set'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function(){
          var $this = $(this);
          // don't proceed if already selected
          if ( $this.hasClass('selected') ) {
            return false;
          }
          var $optionSet = $this.parents('.option-set');
          $optionSet.find('.selected').removeClass('selected');
          $this.addClass('selected');

          // make option object dynamically, i.e. { filter: '.my-filter-class' }
          var options = {},
              key = $optionSet.attr('data-option-key'),
              value = $this.attr('data-option-value');
          // parse 'false' as false boolean
          value = value === 'false' ? false : value;
          options[ key ] = value;
          if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options );
          } else {
            // otherwise, apply new options
            $container.isotope( options );
          }

          return false;
        });
      });
    };
  });
