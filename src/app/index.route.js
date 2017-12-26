(function() {
  'use strict';

  angular
    .module('angularjsInfoRequest')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
