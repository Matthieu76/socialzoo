angular.module('zooApp').controller('userLoginController', userLoginController);

function userLoginController($location) {
  var ul = this;

  ul.login = function() {

    if(ul.userName == "Matthieu" && ul.userPassword == "abcd") {
    	  $location.path('#/');
    } else if(ul.userName == "Marc" && ul.userPassword == "abcd") {
    	  $location.path('#/');
    } else {
        
    }

  };

}
