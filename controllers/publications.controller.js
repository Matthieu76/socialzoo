var mongoose = require('mongoose');
var Publication = mongoose.model('Publication');

module.exports.publicationGetAll = function(req, res) {

	User
	  .find() // prend tout
	  .exec(function(err, user) {
	  	if(err) {
	  		console.log("Impossible de récupérer les utilisateurs");
	  		res
	  		  .status(500)
	  		  .json(err);
	  	} else {
	  		res
	  		  .json(user);
	  	}
	  });
};

module.exports.userGetOne = function(req, res) {
	var id = req.params.userId;

	User
	  .findById(id)
	  .exec(function(err, doc) {
	  	var response = {
	  		status : 200,
	  		message : doc
	  	};
	  	if (err) {
	  		response.status = 500;
	  		response.message = err;
	  	} else if(!doc) {
	  		response.status = 404;
	  		response.message = {
	  			"message" : "User ID not found " + id
	  		};
	  	}
	  	res
	  	  .status(response.status)
	  	  .json(response.message);
	  });
};

module.exports.userAddOne = function(req, res) {

 // var password = req.body.password;

	User
	  .create({
	  	username  : req.body.username,
	  	firstName : req.body.firstName,
	  	lastName  : req.body.lastName,
	  	email     : req.body.email,
	  	password  : req.body.password,
      // password : bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
	  	profile   : req.body.profile,
	  	field     : req.body.field,
	  	creatorID : req.body.creatorID,
	  	date      : req.body.date,
	  	deleted   : req.body.deleted
      }, function (err, response){
	  if (err){
	    res
		  .status(400)
		  .json(err);
	  } else {
	  	res
	  	  .status(201)
		  .json(response);
	  }
      });
};

module.exports.userDelete = function(req, res) {
	var id = req.params.userId;

	User
	  .findById(id)
	  .remove()
	  .exec(function(err) {
	  	if(err) {
	  		res.send(err);
	  	} else {
	  		res.json({ message : 'Deleted' });
	  	}
	  });
};

module.exports.userUpdate = function(req, res) {
	var id = req.params.userId;

	console.log('GET userId', id);

	User
	  .findById(id)
	  .exec(function(err, user) {
	  	if(err) {
	  		console.log("Error finding user");
	  		res
	  		  .status(500)
	  		  .json(err);
	  		  return;
	  	} else if(!user) {
	  		console.log("UserId not found in database", id);
	  		res
	  		  .status(404)
	  		  .lson({
	  		  	"message" : "User ID not found " + id
	  		  });
	  		  return;
	  	}

	  	user.username  = req.body.username;
	  	user.firstName = req.body.firstName;
	  	user.lastName  = req.body.lastName;
	  	user.email     = req.body.email;
	  	user.password  = req.body.password;
	  	user.profile   = req.body.profile;
	  	user.field     = req.body.field;
	  	user.creatorID = req.body.creatorID;
	  	user.date      = req.body.date;
	  	user.deleted   = req.body.deleted;

	  	user
	  	  .save(function(err, userUpdate) {
	  	  	if(err) {
	  	  		res
	  	  		  .status(500)
	  	  		  .json(err);
	  	  	} else {
	  	  		res
	  	  		  .status(204)
	  	  		  .json();
	  	  	}
	  	  });
	  });

};
