'use strict';

angular.module('neighborApp', ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login', {
    url: '/',
    templateUrl: './views/login.html',
    controller: 'loginCtrl'
  }).state('main', {
    url: '/main',
    templateUrl: './views/main.html',
    controller: 'mainCtrl'
  }).state('settings', {
    url: '/settings',
    templateUrl: './views/settings.html',
    controller: 'settingsCtrl'
  });
});

angular.module('neighborApp').controller('loginCtrl', function ($scope) {

  $scope.login = 'Login Page';
});

angular.module('neighborApp').controller('mainCtrl', function ($scope) {});

angular.module('neighborApp').controller('SettingsCtrl', function ($scope) {});