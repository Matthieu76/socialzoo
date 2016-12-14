angular.module('zooApp', ['ngRoute']).config(config);

function config($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl  : 'angular-app/main/main.html',
    controller   : zooListController,
    controllerAs : 'zl'
  })
  .when('/newzoo', {
    templateUrl  : 'angular-app/zoos-add/zoo-add.html',
    controller   : zooAddController,
    controllerAs : 'za',
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




