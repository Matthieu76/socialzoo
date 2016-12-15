var mongoose = require('mongoose');

var Publication = new mongoose.Schema({
  titrePublication : {
    type     : String,
    required : false
  },
  textePublication : {
    type     : String,
    required : false
  },
  nbLikes : {
    type : String,
    required : false
  },
  listeCommentaires : {
    type : String,
    required : false
  },
  pouceLeveJaime : {
    type     : String,
    required : false
  },
  titreNouveauMessage : {
    type     : String,
    required : false
  },
  nouveauMessage : {
    type     : String,
    required : false
  },
  nouveauCommentaire : {
    type     : String,
    required : false
  }
});

mongoose.model('Publication', Publication);
