var mongoose = require('mongoose');
var Article    = mongoose.model('Article');


module.exports.articleGetAll = function(req, res) {

	Article
	  .find() // prend tout
	  .exec(function(err, article) {
	  	if(err) {
	  		console.log("Impossible de récupérer les articles");
	  		res
	  		  .status(500)
	  		  .json(err);
	  	} else {
	  		res
	  		  .json(article);
	  	}
	  });
};

module.exports.articleGetOne = function(req, res) {
	var id = req.params.articleId;

	Article
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
	  			"message" : "Article ID not found " + id
	  		};
	  	}
	  	res
	  	  .status(response.status)
	  	  .json(response.message);
	  });
};

module.exports.articleAddOne = function(req, res) {

	Article
	  .create({
	  	articleTitle : req.body.articleTitle,
	  	articleText  : req.body.articleText
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

module.exports.articleDelete = function(req, res) {
	var id = req.params.articleId;

	Article
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

module.exports.articleUpdate = function(req, res) {
	var id = req.params.articleId;

	console.log('GET articleId', id);

	Article
	  .findById(id)
	  .exec(function(err, article) {
	  	if(err) {
	  		console.log("Error finding article");
	  		res
	  		  .status(500)
	  		  .json(err);
	  		  return;
	  	} else if(!article) {
	  		console.log("ArticleId not found in database", id);
	  		res
	  		  .status(404)
	  		  .lson({
	  		  	"message" : "Article ID not found " + id
	  		  });
	  		  return;
	  	}

	  	article.articleTitle = req.body.articleTitle;
	  	article.articleText = req.body.articleText;

	  	article
	  	  .save(function(err, articleUpdate) {
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
