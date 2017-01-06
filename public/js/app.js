angular.module('neighborApp', ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/chat.html',
        controller: 'mainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: './views/login.html',
        controller: 'mainCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: './views/settings.html',
        controller: 'mainCtrl'
      })
    })
