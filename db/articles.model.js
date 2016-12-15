var mongoose = require('mongoose');

var Article = new mongoose.Schema({
  articleTitle : {
    type     : String,
    required : true
  },
  articleText  : {
    type     : String,
    required : true
  }
});

mongoose.model('Article', Article);
