angular.module('neighborApp', []);

angular.module('neighborApp').controller('mainCtrl', function($scope) {
  
})

const express = require('express');

const app = express();

// app.use(express.static(__dirname + '../public'));

const port = 8080;

app.listen(port, function() {
  console.log('working');
});