const articleApp = angular.module('userslist', ['ngRoute','ngResource']);

articleApp.factory('Articles', [
    '$resource', function ($resource) {
        return $resource('src/users/users.json', {})
    }
]);

articleApp.run(function ($rootScope, Articles) {
    $rootScope.items = Articles.query();
});

articleApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.when('/', {
        templateUrl: 'src/templates/login.html',
        controller : 'LoginCtrl',
        reloadOnSearch: true
    }).when('/home', {
        templateUrl: 'src/templates/main.html',
        controller : 'UserCtrl',
        reloadOnSearch: true
    }).when('/add', {
        templateUrl: 'src/templates/add.html',
        controller : 'AddUserCtrl',
        reloadOnSearch: true
    }).when('/:id/edit', {
        templateUrl: 'src/templates/edit.html',
        controller : 'EditUserCtrl',
        reloadOnSearch: true
    }).when('/:id/preview', {
        templateUrl: 'src/templates/preview.html',
        controller : 'PreviewUserCtrl',
        reloadOnSearch: true
    }).otherwise({
        redirectTo: '/'
    });
});

articleApp.filter('startFrom', function(){
    return function(input, start){
        start = +start;
        return input.slice(start);
    }
});