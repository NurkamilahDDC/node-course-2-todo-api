
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());
 
app.post('/todos', (req, res) => {
var todo = new Todo({
text : req.body.text
});


todo.save().then((doc)=> {
    res.send(doc); 
}, (e) => {
    res.status(400).send(e);
});
});
 

app.listen(3000, () => {
    console.log('star  on port 3000');
});

module.exports = {app};
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

//jika ingin membuat moongose dalam database harus membuat dulu modelnya
// sebelum dipindahin 
//  var Todo = mongoose.model('Todo', {

//     text : {
//         type : String,
//         required : true,
//         minlength : 1,
//         trim : true
//     },
//     completed : {
//         type : Boolean,
//         default : false
//     },
//     completedAt: {
//         type : Number,
//         default : null
//     } 
//  });
 //route itu navigasi

//  var newTodo = new Todo({
//      text :'jangan lupa'
//  });
//  //tambahin fungsi callback
//  newTodo.save().then((doc) => {
//     console.log('save todo', doc);}, (e) => {
//     console.log('unable to save todo')
//});
// var otherTodo = new Todo({
//     text : true,
//     text : 'ciyee ngantuk '
//     // text : 'kasih makan kucing',
//     // completed: true,
//     // completedAt: 123
// });
// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));  
// },(e) => {
//     console.log('unable to save', e);
// });
//user 
//email - require it - trim it - set type - set min length of 1


// var user  = mongoose.model('user', {

//     email: {
//         type : String,
//         required : true,
//         minlength : 1,
//         trim : true
//     }
//  });

//  var user = new user({
//     email : 'kamila@gmail.com'
//  });
//  user.save().then((doc) => {
//        console.log('user saved', doc);  
//      },(e) => {
//         console.log('unable to save', e);
//      });