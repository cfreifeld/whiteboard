module.exports = function () {
  const mongoose = require('mongoose');
  require('dotenv').config();
  // const databaseName = 'whiteboard';
  const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/whiteboard';
  //const connectionString = process.env.M;
  // connectionString += databaseName;
  mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
};
