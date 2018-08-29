var mongoose = require('mongoose');
var User  = mongoose.model('User', {

    email: {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    }
 });

 var user = new User({
    email : 'kamila@gmail.com'
 });
 user.save().then((doc) => {
       console.log('user saved', doc);  
     },(e) => {
        console.log('unable to save', e);
     });

     module.exports = {User};