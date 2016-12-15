angular.module('zooApp', ['ngRoute']).config(config);

function config($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl  : 'angular-app/main/main.html'
  })
  .when('/newzoo', {
    templateUrl  : 'angular-app/zoos-add/zoo-add.html',
    controller   : 'zooAddController',
    controllerAs : 'za',
  })
  .when('/zoos/:id', {
    templateUrl  : 'angular-app/zoos-display/zoo-display.html',
    controller   : 'zooDisplayController',
    controllerAs : 'zd',
  })
  .when('/newarticle', {
    templateUrl  : 'angular-app/articles-add/article-add.html',
    controller   : 'articleAddController',
    controllerAs : 'aa',
  })
  .when('/login', {
    templateUrl  : 'angular-app/users-login/user-login.html'/*,
    controller   : LoginController,
    controllerAs : 'vm',*/
  })
  .otherwise({
    redirectTo   : '/'
  });
}




