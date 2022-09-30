const mongoose = require('mongoose');
const oscann = require('./Oscann')

module.exports = {
  connectToServer: function (callback) {
    mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, function (err) {
      if (!err) {
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },
};
