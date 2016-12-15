angular.module('zooApp').controller('articleListController', articleListController);

function articleListController(articlesFactory, $scope) {
  var al = this;
  al.articles = null;

  // recherche
  $scope.recherche = '';
  // fin recherche

  articlesFactory.articleGetAll().then(function(response) {
    al.articles = response.data;
  });
}
