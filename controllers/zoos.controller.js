var mongoose = require('mongoose');
var Zoo     = mongoose.model('Zoo');

module.exports.zooGetAll = function(req, res) {

	Zoo
	  .find() // prend tout
	  .exec(function(err, zoo) {
	  	if(err) {
	  		console.log("Impossible de récupérer les zoos");
	  		res
	  		  .status(500)
	  		  .json(err);
	  	} else {
	  		res
	  		  .json(zoo);
	  	}
	  });
};

module.exports.zooGetOne = function(req, res) {
	var id = req.params.zooId;

	Zoo
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
	  			"message" : "Zoo ID not found " + id
	  		};
	  	}
	  	res
	  	  .status(response.status)
	  	  .json(response.message);
	  });
};

module.exports.zooAddOne = function(req, res) {

	Zoo
	  .create({
	  	zooName        : req.body.zooName,
	  	zooDescription : req.body.zooDescription,
	  	zooLocation    : req.body.zooLocation,
	  	zooLikes       : req.body.zooLikes
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

module.exports.zooDelete = function(req, res) {
	var id = req.params.zooId;

	Zoo
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

module.exports.zooUpdate = function(req, res) {
	var id = req.params.zooId;

	console.log('GET zooId', id);

	Zoo
	  .findById(id)
	  .exec(function(err, zoo) {
	  	if(err) {
	  		console.log("Error finding zoo");
	  		res
	  		  .status(500)
	  		  .json(err);
	  		  return;
	  	} else if(!zoo) {
	  		console.log("ZooId not found in database", id);
	  		res
	  		  .status(404)
	  		  .lson({
	  		  	"message" : "Zoo ID not found " + id
	  		  });
	  		  return;
	  	}

	  	zoo.zooName        = req.body.zooName;
	  	zoo.zooDescription = req.body.zooDescription;
	  	zoo.zooLocation    = req.body.zooLocation;
	  	zoo.zooLikes       = req.body.zooLikes;

	  	zoo
	  	  .save(function(err, zooUpdate) {
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
