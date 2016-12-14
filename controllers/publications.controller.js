var mongoose = require('mongoose');
var User     = mongoose.model('User');

module.exports.register = function(req, res) { console.log("##REGISTER##");
  console.log('registering user');

  var username = req.body.username;
  var name     = req.body.name || null;
  var password = req.body.password;

  User.create({
    username : username,
    name     : name,
    password : bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }, function(err, user) {
    if(err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      res.status(201).json(user);
    }
  });
};

module.exports.login = function(req, res) { console.log("##LOGIN##");
  console.log('logging in user');
  var username = req.body.username;
  var password = req.body.password;
  console.log('###', username, password);

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if(err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      if(bcrypt.compareSync(password, user.password)) {
        console.log('User found', user);

        // ####################################################
        // !!! mettre la "phrase secrète" en variable d'environnement
        // pour ne pas qu'elle soit visible dans le code
        // et ne pas avoir à la retaper à chaque fois
        // ####################################################

        var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600 });
        res.status(200).json({success: true, token: token});
      } else {
        res.status(401).json('Unauthorized');
      }
    }
  });
};

module.exports.authentificate = function(req, res, next) {
  var headerExists = req.headers.authorization;
  if(headerExists) {
    var token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 's3cr3t', function(error, decoded){
      if(error) {
        console.log(error);
        res.status(401).json('Unauthorized');
      } else {
        req.user = decoded.username;
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};

module.exports.userGetAll = function(req, res) {

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
