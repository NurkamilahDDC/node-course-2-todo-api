const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const assert = require('assert');
const dbName = 'TodoApp';
const {ObjectID} = require ('mongodb');

var user ={name : 'Deni', age:25};
var{name}=user;
console.log(name);

var obj = new ObjectID();
console.log(obj);

// MongoClient.connect(url, (err,db)=>{
//     if (err){
//         return console.log('gabisa konek ke db server');
//     }
//     console.log('connected to mongggoDB');

//     db.close();
// });

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    // db.collection('Todos').insertOne({
    //     text: 'apa aja',
    //     completed: false
    // },(err,result)=>{
    //     if (err){
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    // });
    // insertDocuments(db,function(){
    //     client.close();
    //     //db.close();
    // });

    insertDocuments(db,function(){
        client.close();
    });
  
    
  });

  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Todos');
    // Insert some documents
    collection.insertOne(
      {
          text : 'mila',
          completed : false
        }
    , function(err, result) {
        if (err){
            return console.log('unable to insert todo',err);
                }
        //console.log(JSON.stringify(result.ops,undefined, 2));
        console.log(result.ops[0]._id);
    });
  }

  const insertUser = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Users');
    // Insert some documents
    collection.insertOne(
      {
          name : 'deni Fd',
          age : 27,
          location : 'jakarta'
        }
    , function(err, result) {
        if (err){
            return console.log('unable to insert todo',err);
                }
        //console.log(JSON.stringify(result.ops,undefined, 2));
        console.log(result.ops[0]._id);
        console.log(result.ops[0]._id.getTimestamp());
    });
  }