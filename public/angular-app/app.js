angular.module('zooApp', ['ngRoute']).config(config);

function config($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl  : 'angular-app/main/main.html'/*,
    controller   : LoginController,
    controllerAs : 'vm',
    access       : { restricted: false }*/
  })
  .when('/public', {
    templateUrl  : 'angular-app/main/main.html'/*,
    controller   : LoginController,
    controllerAs : 'vm',
    access       : { restricted: false }*/
  })
  .otherwise({
    redirectTo   :'/'
  });
}