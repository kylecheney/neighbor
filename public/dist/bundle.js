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

angular.module('neighborApp').controller('mainCtrl', function ($scope, messageService, socket) {

  $scope.postMessage = function (message) {
    messageService.postMessage(message).then(function (response) {
      $scope.data = response;
    });
  };

  $scope.getMessages = function () {
    messageService.getMessage().the(function (response) {
      $scope.messages = response;
    });
  };
});

angular.module('neighborApp').service('messageService', function ($http, $rootScope) {

  // var socket = io.connect();
  //   return {
  //     on: function (eventName, callback) {
  //       socket.on(eventName, function () {
  //         var args = arguments;
  //         $rootScope.$apply(function () {
  //           callback.apply(socket, args);
  //         });
  //       });
  //     },
  //     emit: function (eventName, data, callback) {
  //       socket.emit(eventName, data, function () {
  //         var args = arguments;
  //         $rootScope.$apply(function () {
  //           if (callback) {
  //             callback.apply(socket, args);
  //           }
  //         });
  //       })
  //     }
  //   };

  this.postMessage = function (message) {
    return $http({
      method: "POST",
      url: "/main",
      data: message
    }).then(function (response) {
      return response;
    });
  };

  this.getMessage = function () {
    return $http({
      method: "GET",
      url: "/main"
    }).then(function (response) {
      return response.data;
    });
  };
});

angular.module('neighborApp').controller('SettingsCtrl', function ($scope) {});