angular.module('zooApp').controller('zooDisplayController', zooDisplayController);

function zooDisplayController($location, $route, $routeParams, zoosFactory) {
  var zd = this;
  var id = $routeParams.id;
  zd.zoo = null;

  zoosFactory.zooGetOne(id).then(function(response) {
    zd.zoo = response.data;
  });

  zd.deleteFct = function() {
    var zd = this;
    var id = $routeParams.id;

  	zoosFactory.zooDelete(id, zd.zoo).then(function(response) {
        zd.zoo = response.data;
        $location.path('#/');
  	});

  }

}
