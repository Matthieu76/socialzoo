angular.module('zooApp').controller('articleAddController', articleAddController);


function articleAddController($location, articlesFactory) {
  var aa = this;
  aa.isSubmitted = false;

  aa.addArticle = function() {

    console.log("Ok");

    var postData = {
      articleTitle : aa.articleTitle,
      articleText  : aa.articleText
    };

    if (aa.articleForm.$valid) {
      articlesFactory.articleAddOne(postData).then(function(response) {
        if (response.status === 201) {
          $location.path('#/');
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      aa.isSubmitted = true;
    }
  }
}
