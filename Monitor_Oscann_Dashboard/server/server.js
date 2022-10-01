require('dotenv').config();
const cors = require('cors');
const express = require('express');
require("dotenv").config({ path: "./config.env" });
const Model = require('./db/models/model');
const dbo = require("./db/conn");
const model_json = require("./model.json");
const port = process.env.PORT || 4600;

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

Model.collection.insertOne(model_json)

const Cron = require('./Cron/Cron');