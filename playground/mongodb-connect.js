// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above but with object destructering

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to  connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Harman',
  //   age: 29,
  //   location: 'USA'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert user', err);
  //   } else {
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });

  client.close();
});
