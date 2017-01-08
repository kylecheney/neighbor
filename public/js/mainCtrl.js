angular.module('neighborApp').controller('mainCtrl', function($scope, messageService, socket) {

  $scope.postMessage = function (message) {
    messageService.postMessage(message).then(function(response) {
      $scope.data = response;
    })
  }

  $scope.getMessages = function () {
    messageService.getMessage().the(function(response) {
      $scope.messages = response;
    })
  }

})
