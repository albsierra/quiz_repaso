// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider,
      $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      });

    $urlRouterProvider.otherwise('todo');

    $httpProvider.interceptors.push(function($q) {
    return {
     'request': function(config) {

          config.headers['access_token'] = '9wwzZuFOrBqFxkqEwDBhX3kjXcQK6K4qiPlg9TV2D2MUQPZRNuVmnVTAT1Iqu8zm';
          return config;
      }
    };
  });
  }]);
