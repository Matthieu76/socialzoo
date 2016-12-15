angular.module('zooApp').controller('publicationListController', publicationListController);

function publicationListController(publicationsFactory, $scope) {
  var publ = this;
  publ.zoos = null;

  // recherche
  $scope.recherche = '';
  // fin recherche

  publicationsFactory.publicationsGetAll().then(function(response) {
    publ.zoos = response.data;
  });
}
