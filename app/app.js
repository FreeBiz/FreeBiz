'use strict';

// Declare app level module which depends on views, and components
angular.module('FreeBiz', [
  'ngRoute',
  'FreeBiz.view1',
  'FreeBiz.view2',
  'FreeBiz.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
