const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove() pass in query and will remove multiple if it matches many

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('5bd91445fabd00fba7af4890').then((doc) => {
//   console.log(doc);
// });

// Todo.findOneAndRemove({_id: '5bd91445fabd00fba7af4890'}).then((doc) => {
//   console.log(doc);
// });
