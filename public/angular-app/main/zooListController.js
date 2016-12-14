angular.module('zooApp').controller('zooListController', zooListController);

function zooListController(zoosFactory, $scope) {
  var zl = this;
  zl.zoos = null;

  // recherche
  $scope.recherche = '';
  // fin recherche

  zoosFactory.zooGetAll().then(function(response) {
    zl.zoos = response.data;
  });
}
