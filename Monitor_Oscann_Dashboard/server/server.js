require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config({ path: "./config.env" });
const model_distribuidor = require('./db/models/model_distribuidor');
const model_oscann = require('./db/models/model_oscann');
const dbo = require("./db/conn");
//const Model_Oscann = require("./model_oscann.json");
const graphql_Distributor = require("./graphql_distributor.json");
const Model_Distributor = require("./Mongo_distributor.json");
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

const saveGraphql = async (distributor_save) => {
	//for (let idx = 0; idx < oscann_save.length; idx++) {
	let s = new model_distribuidor(distributor_save);
	s.save().then((doc) => {
		console.log("Distributor:", doc);
	});
	//}
	return
};

const updateGraphql = async (distribuidor_update) => {
	let doc = await model_distribuidor.findOneAndUpdate(
		distribuidor_update,
		{ new: true }
	);
	//console.log("Oscann:", doc);
	//console.log("Created At:", doc.createdAt);
	//console.log("Updated At:", doc.updatedAt);
};


/*
var dictstring = JSON.stringify(dict);
var fs = require('fs');
fs.writeFile("thing.json", dictstring);*/

const start = async () => {


	model_distribuidor.find({}, async function (err, data) {
		/*for (idx_gql = 0; idx_gql < graphql_Distributor.length; idx_gql++) {
			await saveGraphql(graphql_Distributor[idx_gql]);
		}*/

		//const fs = require('fs')
		//console.log("MONGO: ", JSON.stringify(data), JSON.stringify(graphql_Distributor).length)
		//console.log("GRAPHQL: ", JSON.stringify(graphql_Distributor), (data).length)
		//console.log("START")
		for (let idx_GQ = 0; idx_GQ < graphql_Distributor.length; idx_GQ++) {
			for (let idx_M_o = 0; idx_M_o < data.length; idx_M_o++) {
				//console.log(idx_M_o)
				//console.log(data[idx_M_o].nombre_distribuidor)
				//console.log()
				/*
				mongo | graphql
				col     col
				col     per
				col
				per
				per				
				*/
				//console.log(typeof(data[idx_M_o]))
				if (data[idx_M_o].nombre_distribuidor === graphql_Distributor[idx_GQ].nombre_distribuidor) {
					//console.log(JSON.stringify(data[idx_M_o]))
					//console.log(JSON.stringify(graphql_Distributor[idx_GQ]))	
					//console.log("data status: ", data[idx_M_o].Status_distribuidor)
					//console.log("graph status: ", graphql_Distributor[idx_GQ].Status_distribuidor)
					if (data[idx_M_o].Status_distribuidor !== graphql_Distributor[idx_GQ].Status_distribuidor) {
						console.log("SON DIFERENTES")
						await saveGraphql(graphql_Distributor[idx_GQ]);
					} else {
						setTimeout(function () {
							console.log("SON IGUALES")
							updateGraphql(graphql_Distributor[idx_GQ]);
						}, 3000);
					}
					break;
				}
			}
		}
		/*const jsonString = JSON.stringify(data)
		fs.writeFileSync('./graphql_distributor.json', jsonString, err => {
			if (err) {
				console.log('Error writing file', err)
			} else {
				console.log('Successfully wrote file')
			}
		})*/
	}).sort({ updatedAt: -1 });


	//await saveOscann(Model_Oscann);
	//new model_oscann.insertMany(Model_Oscann)

	//Request Graphql

	/*	console.log(Model_Distributor)
		console.log()
		console.log(graphql_Distributor)*/

	//23:41:11
	/*for (let idx_GQ = 0; idx_GQ < key_update.length; idx_GQ++) {
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
	 }*/
};

start();
//model_oscann.collection.insertOne(Model_Oscann)

//console.log(model_oscann.find({ ID: '101' }))
//saveGraphql(graphql_Distributor[0])


//model_distribuidor.collection.insertMany(graphql_Distributor);

const Cron = require('./Cron/Cron');
