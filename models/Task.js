const mongoose = require('mongoose');
mongoose.promise = global.Promise;

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  }
})


module.exports = mongoose.model('Task', taskSchema);
