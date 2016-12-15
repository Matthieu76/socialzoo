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

	Publication
	  .create({
	  	titrePublication    : req.body.titrePublication,
	  	textePublication  	: req.body.textePublication,
	  	nbLikes  			: req.body.nbLikes,
	  	listeCommentaires  	: req.body.listeCommentaires,

	  	pouceLeveJaime   	: req.body.pouceLeveJaime,
	  	titreNouveauMessage : req.body.titreNouveauMessage,
	  	nouveauMessage 		: req.body.nouveauMessage,
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


	  	publication.titrePublication 	= req.body.titrePublication;
	  	publication.textePublication    = req.body.textePublication;
	  	publication.nbLikes    			= req.body.nbLikes;
	  	publication.listeCommentaires   = req.body.listeCommentaires;
	  	
	  	publication.pouceLeveJaime   	= req.body.pouceLeveJaime;
	  	publication.titreNouveauMessage = req.body.titreNouveauMessage;
	  	publication.nouveauMessage 		= req.body.nouveauMessage;
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
