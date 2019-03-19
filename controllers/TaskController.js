const mongoose = require('mongoose');
const Task = mongoose.model('Task');

exports.taskPage = (req, res) => {
  res.render('index', { title: 'Express' });
}

exports.addTask = (req, res) => {
  res.render('editTask', { title: 'Add Task' });
}

exports.createTask = (req, res) => {
  const task = new Task(req.body);
  task.save()
    .then(task => {
      return Task.find()
  })
  .then(tasks => {
    res.render('index', { title: tasks });
  }).catch(err => {
    res.render('index', { title: err });
  });
}



exports.listTasks = (req, res) => {
  const task = new Task(req.body);
  task.save()
    .then(task => {
    return Task.find()
  })
.then(tasks => {
    res.render('index', { title: tasks });
}).catch(err => {
    res.render('index', { title: err });
});
}


// exports.createTaskWithAsync = async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//   } catch(err) {
//
//   }
//
// }
//
//
// catchErrors = (fn) => {
//   return function(req, res, next) {
//     return fn(req, res, next).catch(next)
//   }
// }

//composition -> take a function and wrap it to another one
