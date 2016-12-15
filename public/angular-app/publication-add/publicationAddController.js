angular.module('zooApp').controller('publicationAddController', publicationAddController);


function publicationAddController($location, publicationsFactory) {
  var puba = this;
  puba.isSubmitted = false;

  puba.addPublication = function() {

    console.log("ok");

    var postData = {
      titrePublication        : puba.titrePublication,
      textePublication        : puba.textePublication,
      nbLikes                 : puba.nbLikes,
      listeCommentaires       : puba.listeCommentaires,
      pouceLeveJaime          : puba.pouceLeveJaime,
      titreNouveauMessage     : puba.titreNouveauMessage,
      nouveauMessage          : puba.nouveauMessage,
      nouveauCommentaire      : puba.nouveauCommentaire
    };

    if (puba.publicationForm.$valid) {
      publicationsFactory.publicationAddOne(postData).then(function(response) {
        if (response.status === 201) {
          $location.path('#/');
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      puba.isSubmitted = true;
    }
  }
}

