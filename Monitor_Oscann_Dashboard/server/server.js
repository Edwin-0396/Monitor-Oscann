require('dotenv').config();
const cors = require('cors');
const express = require('express');
require("dotenv").config({ path: "./config.env" });
const model_distribuidor = require('./db/models/model_distribuidor');
const model_oscann = require('./db/models/model_oscann');
const dbo = require("./db/conn");
const Model_Oscann = require("./model_oscann.json");
const Model_Distribuidor = require("./model_distribuidor.json");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  });

  /*const query = { network_status: '3' };
  const options = {
    // create a document if no documents match the query
    upsert: true,
  };
  // create a new document that will be used to replace the existing document
  const replacement = {
    network_status: "WORKING",
    drive_status: "FULL"
  };
  model_oscann.updateMany({}, { $set: { network_status: 'foo' } });*/


  //model_oscann.collection.insertMany(Model_Oscann)

  //console.log(model_oscann.find({ ID: '101' }))

  model_distribuidor.collection.insertOne(Model_Distribuidor)

const Cron = require('./Cron/Cron');
