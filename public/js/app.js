angular.module('neighborApp', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: './views/login.html',
        controller: 'loginCtrl'
      })
      .state('main', {
        url: '/main',
        templateUrl: './views/main.html',
        controller: 'mainCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: './views/settings.html',
        controller: 'settingsCtrl'
      })

    $urlRouterProvider.otherwise('/');
    })
