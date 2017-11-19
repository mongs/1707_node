const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

// Connection URL
const url = 'mongodb://localhost:27017/swt1707';

var insertDocuments = function(db, callback) {
  var collection = db.collection('students');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('students');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  console.log("Connected successfully to server");
  insertDocuments(db, function() {
    findDocuments(db, function() {
      // db.close();
    });
  });
});

app.get('/', (req, res) => {
  res.send('hello')
})


app.listen(3000, function() {
  console.log('App listening on port 3000!');
})
