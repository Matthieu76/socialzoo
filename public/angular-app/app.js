angular.module('zooApp', ['ngRoute']).config(config);

function config($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl  : 'angular-app/main/main.html'/*,
    controller   : mainController,
    controllerAs : 'zl'*/
  })
  .when('/newzoo', {
    templateUrl  : 'angular-app/zoos-add/zoo-add.html',
    controller   : zooAddController,
    controllerAs : 'za',
  })
  .when('/zoos/:id', {
    templateUrl  : 'angular-app/zoos-display/zoo-display.html',
    controller   : zooDisplayController,
    controllerAs : 'zd',
  })
  .when('/login', {
    templateUrl  : 'angular-app/users-login/user-login.html'/*,
    controller   : LoginController,
    controllerAs : 'vm',*/
  })
  .when('/newpublication', {
    templateUrl  : 'angular-app/publication-add/publication-add.html',
    controller   : publicationAddController,
    controllerAs : 'puba',
  })
  .when('/newpublication', {
    templateUrl  : 'angular-app/publication-add/publication-add.html',
    controller   : publicationAddController,
    controllerAs : 'puba',
  })
  .when('/public', {
    templateUrl  : 'angular-app/main/main.html'/*,
    controller   : LoginController,
    controllerAs : 'vm',*/
  })
  .otherwise({
    redirectTo   : '/'
  });
}




