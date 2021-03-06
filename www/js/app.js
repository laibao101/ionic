// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})



app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/app.html",
            controller: "AppCtrl"
        })
        .state("app.students", {
            url: "/students",
            views: {
                'students': {
                    templateUrl: "templates/students.html",
                    controller: 'StudentsCtrl'
                }
            }
        })
        .state("app.students.details", {
            url: "/details/:id/:age",
            views: {
                'details': {
                    templateUrl: 'templates/details.html',
                    controller: 'StudentDetailsCtrl'
                }
            }
        })
        .state("app.classes", {
            url: "/classes",
            views: {
                'classes': {
                    templateUrl: 'templates/classes.html',
                    controller: 'ClassesCtrl'
                }
            }
        })
        .state("app.classes.details", {
            url: "/details/:id",
        });
    $urlRouterProvider.otherwise("/app/students");

})






app.controller('StudentsCtrl', function($scope) {
    $scope.title = "<div class='round-icon'><i class='icon ion-person-stalker'></i></div>"
});

app.controller('StudentDetailsCtrl', ['$scope','$stateParams', function($scope, $stateParams) {
    $scope.id = $stateParams.id;
    $scope.age = $stateParams.age;
}]);

app.controller('ClassesCtrl', ['$scope','$state', function($scope, $state) {
    $scope.title = '<div class="round-icon"><i class="icon ion-university"></i></div>';
    $scope.gotoStudents = function() {
        $state.go('app.students');
    }
}]);



app.controller('AppCtrl', ['$scope', '$rootScope', '$ionicLoading', '$timeout', function($scope, $rootScope, $ionicLoading, $timeout) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (toState.name == 'app.classes.details') {
            return;
        }
        $ionicLoading.show({
            template: '<b>Previous state:</b>' + fromState.name + '<br /> <b>Current state:</b>' + toState.name,
            noBackdrop: true
        });

        $timeout(function() {
            $ionicLoading.hide();
        }, 1000);

    })
}])







