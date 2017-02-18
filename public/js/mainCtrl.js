angular.module('neighborApp').controller('mainCtrl', function($scope, messageService) {

  $scope.postMessage = function (message) {
    messageService.postMessage(message).then(function(response) {
      console.log(response);
      getMessages();
    })
  }

  // const getMessages = messageService.getMessages().then(function(response) {
  //   $scope.messages = response;
  //   console.log($scope.messages)
  // })

  const getMessages = function () {
    messageService.getMessages().then(function(response) {
      $scope.messages = response;
      console.log($scope.messages)
    })
  }
  getMessages();

  // setInterval(function(){
  //   $scope.getMessages();
  // }, 1500)
})
