var mongoose = require('mongoose');

var User = new mongoose.Schema({
  titreNouveauMessage   : {
    type     : String,
    required : true
  },
  nouveauMessage   : {
    type     : String,
    required : true
  },
  titrePublication  : {
    type     : String,
    required : false
  },
  textePublication   : {
    type     : String,
    required : false
  },
  pouceLeveJaime      : {
    type     : Number,
    required : false
  },
  nouveauCommentaire      : {
    type     : String,
    required : false
  }
});

mongoose.model('User', User);
