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
  zooPostalCode : {
    type     : String,
    required : false
  },
  zooCity : {
    type     : String,
    required : false
  },
  zooCountry : {
    type     : String,
    required : false
  },
  zooWebsite : {
  	type     : String,
  	required : false
  }
});

mongoose.model('Zoo', Zoo);
