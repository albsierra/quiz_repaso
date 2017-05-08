// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('TodoController', ['$scope', '$state', 'Puntuacion', function($scope,
      $state, Puntuacion) {
    $scope.todos = [];
    function getPuntuacions() {
      Puntuacion
        .find({"filter":{"include":["usuario","juego"]}})
        .$promise
        .then(function(results) { console.log(results);
          $scope.todos = results;
        });
    }
    getPuntuacions();

    $scope.addPuntuacion = function() {
      Puntuacion
        .create($scope.newPuntuacion)
        .$promise
        .then(function(todo) {
          $scope.newPuntuacion.puntos = '';
          $scope.todoForm.puntos.$setPristine();
          $('.focus').focus();
          getPuntuacions();
        });
    };

    $scope.removePuntuacion = function(item) {
      Puntuacion
        .deleteById(item)
        .$promise
        .then(function() {
          getPuntuacions();
        });
    };
  }]);
