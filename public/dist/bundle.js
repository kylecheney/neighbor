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

  $urlRouterProvider.otherwise('/');
});

angular.module('neighborApp').controller('loginCtrl', function ($scope) {

  $scope.login = 'Login Page';
});

angular.module('neighborApp').controller('mainCtrl', function ($scope, messageService) {

  $scope.postMessage = function (message) {
    messageService.postMessage(message).then(function (response) {
      console.log(response);
      getMessages();
    });
  };

  // const getMessages = messageService.getMessages().then(function(response) {
  //   $scope.messages = response;
  //   console.log($scope.messages)
  // })

  var getMessages = function getMessages() {
    messageService.getMessages().then(function (response) {
      $scope.messages = response;
      console.log($scope.messages);
    });
  };
  getMessages();

  // setInterval(function(){
  //   $scope.getMessages();
  // }, 1500)
});

angular.module('neighborApp').service('messageService', function ($http) {

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
      data: { message: message }
    }).then(function (response) {
      return response.data;
    });
  };

  this.getMessages = function () {
    return $http({
      method: "GET",
      url: "/main"
    }).then(function (response) {
      return response.data;
    });
  };
});

angular.module('neighborApp').controller('SettingsCtrl', function ($scope) {});