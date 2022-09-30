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


/*
console.log("hH")

run()
async function run(){
  const Oscan1 = new oscann({
    name: "Risa",
    position: "Centro",
    level: "Low",})
  await Oscan1.save().then(() => {console.log("Oscann Stored")})
  const Oscan2 = new oscann({
    name: "Quindio",
    position: "Right",
    level: "Midium",})
  await Oscan2.save().then(() => {console.log("Oscann Stored")})
  let myquery = { _id: "6333a226c8b5231d4b4c4064" };
  oscann.findOne(myquery, function (err, result) {
    if (err) throw err;
    console.log(result);
  })
  let myobj = {
    name: "Caldas",
    position: "Centro",
    level: "High",
  };
  oscann.insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log(res)
  });

}*/