const mongoose = require('mongoose');
// require('dotenv').config({ path: 'variables.env' });
//mongodb://dang:p055w0rd@ds113785.mlab.com:13785/
mongoose.connect('mongodb://root:root@mongodb:27017/crud');
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});
//

// Import all our models
require('./models/Task')
const app = require('./app');
// Constants
const PORT = 3001;
app.set('port', PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
