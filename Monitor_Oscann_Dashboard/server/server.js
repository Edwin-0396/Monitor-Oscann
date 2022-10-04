require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config({ path: "./config.env" });
const model_distribuidor = require('./db/models/model_distribuidor');
const model_oscann = require('./db/models/model_oscann');
const dbo = require("./db/conn");
const Model_Oscann = require("./model_oscann.json");
const Model_Distribuidor = require("./model_distribuidor.json");
const port = process.env.PORT || 4500;

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

const saveOscann = async (oscann_save) => {
    for(let idx=0;idx<oscann_save.length;idx++){
		let s = new model_oscann(oscann_save[idx]);
    	s.save().then((doc) => {
      	console.log("Oscann:", doc);
    });
}
    return    
};

const updateOscann = async (key_update) => {
  let doc = await model_oscann.findOneAndUpdate(
    key_update,
    { new: true }
  );
  console.log("Oscann:", doc);
  console.log("Created At:", doc.createdAt);
  console.log("Updated At:", doc.updatedAt);
};


const start = async () => {
  //await saveOscann(Model_Oscann);
  //new model_oscann.insertMany(Model_Oscann)

  //Request Graphql
  key_update =  [{
		"name_oscann": "Oscann_1",
		"network_status": "0",
		"network_value": "30",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	},
	{
		"name_oscann": "Oscann_2",
		"network_status": "0",
		"network_value": "30",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	  },
	  {
		"name_oscann": "Oscann_3",
		"network_status": "0",
		"network_value": "30",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	  },
	  {
		"name_oscann": "Oscann_4",
		"network_status": "0",
		"network_value": "30",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	  },
	  {
		"name_oscann": "Oscann_5",
		"network_status": "0",
		"network_value": "30",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	  },
	  {
		"name_oscann": "Oscann_6",
		"network_status": "0",
		"network_value": "30",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	  },
	  {
		"name_oscann": "Oscann_7",
		"network_status": "0",
		"network_value": "50",
		"ram_status": "2",
		"ram_value": "70%",
		"cpu_status": "2",
		"cpu_value": "29%",
		"drive_status": "1",
		"drive_value": "60%",
		"ledservice_status": "2",
		"ledservice_value": "Fail",
		"camera_status": "0",
		"camera_value": "ok"
	  }]

  //23:41:11
  for (let idx_GQ = 0; idx_GQ < key_update.length; idx_GQ++) {
    for (let idx_M_o = 0; idx_M_o < Model_Oscann.length; idx_M_o++){
      if (key_update[idx_GQ].name_oscann === Model_Oscann[idx_M_o].name_oscann){
        if (JSON.stringify(Model_Oscann[idx_M_o]) !== JSON.stringify(key_update[idx_GQ])) {
          console.log("SON DIFERENTES")
          await saveOscann(key_update);
        } else {
          setTimeout(function () {
            updateOscann(key_update);
          }, 3000);
        }
      }
    }
 }
};

start();
//model_oscann.collection.insertOne(Model_Oscann)

//console.log(model_oscann.find({ ID: '101' }))

model_distribuidor.collection.insertMany(Model_Distribuidor);

const Cron = require('./Cron/Cron');
