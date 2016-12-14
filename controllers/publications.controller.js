var mongoose = require('mongoose');
var Publication = mongoose.model('Publication');

module.exports.publicationsGetAll = function(req, res) {

	Publication
	  .find() // prend tout
	  .exec(function(err, publication) {
	  	if(err) {
	  		console.log("Impossible de récupérer les publications");
	  		res
	  		  .status(500)
	  		  .json(err);
	  	} else {
	  		res
	  		  .json(publication);
	  	}
	  });
};

module.exports.publicationGetOne = function(req, res) {
	var id = req.params.publicationId;

	Publication
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
	  			"message" : "Publication ID not found " + id
	  		};
	  	}
	  	res
	  	  .status(response.status)
	  	  .json(response.message);
	  });
};

module.exports.publicationAddOne = function(req, res) {

 // var password = req.body.password;

	Publication
	  .create({
	  	titreNouveauMessage : req.body.titreNouveauMessage,
	  	nouveauMessage 		: req.body.nouveauMessage,
	  	lastName  			: req.body.lastName,
	  	titrePublication    : req.body.titrePublication,
	  	textePublication  	: req.body.textePublication,
      // password : bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
	  	pouceLeveJaime   	: req.body.pouceLeveJaime,
	  	nouveauCommentaire  : req.body.nouveauCommentaire
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

module.exports.publicationDelete = function(req, res) {
	var id = req.params.publicationId;

	Publication
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

module.exports.publicationUpdate = function(req, res) {
	var id = req.params.publicationId;

	console.log('GET publicationId', id);

	Publication
	  .findById(id)
	  .exec(function(err, publication) {
	  	if(err) {
	  		console.log("Error finding publication");
	  		res
	  		  .status(500)
	  		  .json(err);
	  		  return;
	  	} else if(!publication) {
	  		console.log("PublicationId not found in database", id);
	  		res
	  		  .status(404)
	  		  .lson({
	  		  	"message" : "Publication ID not found " + id
	  		  });
	  		  return;
	  	}

	  	publication.titreNouveauMessage = req.body.titreNouveauMessage;
	  	publication.nouveauMessage 		= req.body.nouveauMessage;
	  	publication.titrePublication 	= req.body.titrePublication;
	  	publication.textePublication    = req.body.textePublication;
	  	publication.password  			= req.body.password;
	  	publication.pouceLeveJaime   	= req.body.pouceLeveJaime;
	  	publication.nouveauCommentaire  = req.body.nouveauCommentaire;

	  	publication
	  	  .save(function(err, publicationUpdate) {
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
