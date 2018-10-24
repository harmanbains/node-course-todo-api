var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//creates model and returns a constructor function, so you can create new Todo() now
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//new instance, but doesn't save it to mongodb
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var newTodo = new Todo({
//   text: 'memreview'
// });
//
// newTodo.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// User
// email - required - trim it - type: string - ming length of 1

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var newUser = User({
  email: 'jomo@mojogo.com'
})

newUser.save().then((doc) => {
  console.log(doc);
}, (e) => {
  console.log('Unable to save user');
});
