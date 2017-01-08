angular.module('neighborApp').service('messageService', function($http, $rootScope) {

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
    }).then(function(response) {
      return response;
    })
  }

  this.getMessage = function () {
    return $http({
      method: "GET",
      url: "/main"
    }).then(function(response) {
      return response.data;
    })
  }

})
