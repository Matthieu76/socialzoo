var mongoose = require('mongoose');

var Zoo = new mongoose.Schema({
  zooName : {
    type     : String,
    required : false
  },
  zooDescription : {
    type     : String,
    required : false
  },
  zooLocation : {
    type     : String,
    required : false
  },
  zooLikes : {
  	type     : Number,
  	required : false
  }
});

mongoose.model('Zoo', Zoo);
