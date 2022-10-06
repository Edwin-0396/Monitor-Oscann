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
const port = process.env.PORT || 4500;

const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(port, () => {
	dbo.connectToServer(function (err) {
		if (err) console.error(err);

	});
	console.log(`Server is running on port: ${port}`);
});

const saveGraphql = async (distributor_save) => {
	let s = new model_distribuidor(distributor_save);
	s.save()
	//Only test
	/*.then((doc) => {
		console.log("Distributor:", doc);
	});*/
	return
};

const updateGraphql = async (distribuidor_update) => {
	await model_distribuidor.findOneAndUpdate(
		distribuidor_update,
		{ new: true }
	);
};

const start = async () => {

	model_distribuidor.find({}, async function (err, data) {

		//Only test! - create new database
		/*for (idx_gql = 0; idx_gql < graphql_Distributor.length; idx_gql++) {
			await saveGraphql(graphql_Distributor[idx_gql]);
		}*/

		for (let idx_GQ = 0; idx_GQ < graphql_Distributor.length; idx_GQ++) {
			for (let idx_M_o = 0; idx_M_o < data.length; idx_M_o++) {
				if (data[idx_M_o].nombre_distribuidor === graphql_Distributor[idx_GQ].nombre_distribuidor) {
					if (data[idx_M_o].Status_distribuidor !== graphql_Distributor[idx_GQ].Status_distribuidor) {
						console.log("Document inserted!")
						await saveGraphql(graphql_Distributor[idx_GQ]);
					} else {
						setTimeout(function () {
							console.log("Database Updated!")
							updateGraphql(graphql_Distributor[idx_GQ]);
						}, 3000);
					}
					break;
				}
			}
		}
	}).sort({ updatedAt: -1 });
};

start();

//model_oscann.collection.insertOne(Model_Oscann)
//model_distribuidor.collection.insertMany(graphql_Distributor);

const Cron = require('./Cron/Cron');
