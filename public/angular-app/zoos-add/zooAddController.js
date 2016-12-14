angular.module('zooApp').controller('zooAddController', zooAddController);


function zooAddController($location, zoosFactory) {
  var za = this;
  za.isSubmitted = false;

  za.addZoo = function() {

    var postData = {
      zooName        : za.zooName,
      zooDescription : za.zooDescription,
      zooLocation    : za.zooLocation,
      zooLikes       : za.zooLikes
    };

    if (za.zooForm.$valid) {
      zoosFactory.zooAddOne(postData).then(function(response) {
        if (response.status === 201) {
          $location.path('#/');
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      za.isSubmitted = true;
    }
  }
}
