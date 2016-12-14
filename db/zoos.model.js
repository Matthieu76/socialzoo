var mongoose = require('mongoose');

var Zoo = new mongoose.Schema({
  zooName : {
    type     : String,
    required : true
  },
  zooDescription : {
    type     : String,
    required : true
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
