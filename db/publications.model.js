var mongoose = require('mongoose');

var Publication = new mongoose.Schema({
  titrePublication  : {
    type     : String,
    required : false
  },
  textePublication   : {
    type     : String,
    required : false
  },
  nbLikes      : {
    type     : Number,
    required : false
  },
  listeCommentaires      : {
    type     : String,
    required : false
  },
  pouceLeveJaime      : {
    type     : Number,
    required : false
  },
  titreNouveauMessage   : {
    type     : String,
    required : true
  },
  nouveauMessage   : {
    type     : String,
    required : true
  },
  nouveauCommentaire      : {
    type     : String,
    required : false
  }
});

mongoose.model('Publication', Publication);
