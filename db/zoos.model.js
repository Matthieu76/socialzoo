var mongoose = require('mongoose');

var User = new mongoose.Schema({
  username   : {
    type     : String,
    unique   : true,
    required : true
  },
  password   : {
    type     : String,
    required : true
  },
  firstName  : {
    type     : String,
    required : false
  },
  lastName   : {
    type     : String,
    required : false
  },
  email      : {
    type     : String,
    required : false
  },
  profile    : {
    type     : String,
    required : false
  },
  field      : {
    type     : String,
    required : false
  },
  creatorID  : {
    type     : String,
    required : false
  },
  date       : {
    type     : String,
    required : false
  },
  deleted    : {
    type     : Boolean,
    required : false
  }
});

mongoose.model('User', User);
