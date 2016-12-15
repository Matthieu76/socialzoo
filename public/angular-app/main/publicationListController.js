angular.module('zooApp').controller('publicationListController', publicationListController);

function publicationListController(publicationsFactory, $scope) {
  var publ = this;
  publ.publications = null;

  // recherche
  $scope.recherche = '';
  // fin recherche

  publicationsFactory.publicationsGetAll().then(function(response) {
    publ.publications = response.data;
  });
}
