require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config({ path: "./config.env" });
const model_distribuidor = require('./db/models/model_distribuidor');
const model_oscann = require('./db/models/model_oscann');
const dbo = require("./db/conn");
const Model_Oscann = require("./model_oscann.json");
const graphql_Distributor = require("./graphql_distributor.json");
/// cron request
const cron = require("node-cron");
const { http, signs } = require("./util");
const Model = require('./db/models/model_distribuidor');
const graphql_response = require("./graphql_response.json");
var _ = require('lodash');
//const graphql_Response = require("./graphql_response.json");
const port = process.env.PORT;

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
	await s.save()
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

/*const start = async () => {

	//Only test! - create new database
	for (idx_gql = 0; idx_gql < Model_Oscann.length; idx_gql++) {
		await saveGraphql(Model_Oscann[idx_gql]);
	}
};

start();
*/
class Main {
	static async get_summary_endpoint() {
		//summary_endpoint = await http.get("/" + "").data; //endpoint from graphql API

		console.log("funciton Cron")

		//Model.collection.insertOne({todayHoroscope})
		var dict = graphql_response;
		//array of max
		let max_D = []
		let max_DH = []
		let max_H = []
		let max_Oscann = []
		let max_OSCAN = []
		let max_HOSP = []
		let MAX_DH = []
		//max values
		let max_oscann_D = 0
		let max_oscann_H = 0
		let max_oscann_DH = 0
		let max_oscann = 0

		//try to extract the max status
		for (let idx_res = 0; idx_res < dict.length; idx_res++) {
			for (let idx__dh = 0; idx__dh < dict[idx_res].Distribuidores_hospitalarios.length; idx__dh++) {
				for (let id_H = 0; id_H < dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales.length; id_H++) {
					for (let id_Oscann = 0; id_Oscann < dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann.length; id_Oscann++) {
						let arr = Object.values(dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann[id_Oscann]);
						var arrayOfNumbers = arr.map(Number);
						var arraynumbers = arrayOfNumbers.slice(2, 7);
						max_oscann_D = Math.max(...arraynumbers);
						dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann[id_Oscann].Maximo_oscann = max_oscann_D

						max_Oscann.push(max_oscann_D)
						max_OSCAN.push(max_oscann_D)
					}
					max_oscann_H = Math.max(...max_OSCAN);
					dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Maximo_Hospital = max_oscann_H

					max_H.push(max_oscann_H)
					max_OSCAN = []
					max_HOSP.push(max_oscann_H)
				}
				max_oscann_DH = Math.max(...max_HOSP);
				dict[idx_res].Distribuidores_hospitalarios[idx__dh].Maximo_Dist_Hosp = max_oscann_DH

				max_DH.push(max_oscann_DH)
				max_HOSP = []
				MAX_DH.push(max_oscann_DH)
			}

			max_Oscann = []
			max_H = []
			max_oscann_D = Math.max(...max_DH)
			dict[idx_res].Maximo_Distributor = max_oscann_D
			max_D.push(max_oscann_D)
			max_DH = []
			max_D = []
			/*dict[idx_res].Max_Oscann = max_Oscann*/
			//dict[idx_res].Max_Hospital = max_H
			/*dict[idx_res].Max_Dist_Hosp = max_DH*/
			/*dict[idx_res].Max_Distribuidor = max_D*/
		}

		var dictstring = JSON.stringify(dict);
		var fs = require('fs');
		fs.writeFileSync("graphql_distributor.json", dictstring);

		model_distribuidor.find({}, async function (err, data) {
			if (data == 0) {
				for (let idx_gql = 0; idx_gql < graphql_Distributor.length; idx_gql++) {
					await saveGraphql(graphql_Distributor[idx_gql]);
				}
				console.log("New insert to empty DB!")
				return
			}

			for (let idx_GQ = 0; idx_GQ < graphql_Distributor.length; idx_GQ++) {
				for (let idx_M_o = 0; idx_M_o < data.length; idx_M_o++) {
					if (data[idx_M_o].nombre_distribuidor === graphql_Distributor[idx_GQ].nombre_distribuidor) {
						/*console.log("MONGO DATA: ", JSON.stringify(data[idx_M_o]))
						console.log("-------------------------------------------------------")
						console.log("RESPONSE-SUMMARY DATA: ", JSON.stringify(graphql_Distributor[idx_GQ]))
						console.log("-------------------------------------------------------\n")*/
						//const obj1 = { prop1: 1, prop2: "foo", prop3: { prop4: 2, prop5: "bar" }, prop7: { pro8: "only in 1" } },
						//obj2 = { prop1: 3, prop2: "foo", prop3: { prop4: 2, prop5: "foobar" }, prop6: "only in 2" };
						/*const isObject = val => typeof val === 'object' && val // required for "null" compariso
						function compare(obj1 = {}, obj2 = {}) {
							const output = {},
								merged = { ...obj1, ...obj2 }; // has properties of both
							for (const key in merged) {
								const value1 = obj1[key],
									value2 = obj2[key];

								if (isObject(value1) || isObject(value2))
									output[key] = compare(value1, value2) // recursively call
								else
									output[key] = value1 === value2
							}
							return output;
						}
						console.log(compare(data[idx_M_o], graphql_Distributor[idx_GQ]))*/
						//console.log(Object.entries(data[idx_M_o]).toString() === Object.entries(graphql_Distributor[idx_GQ]).toString());
						//console.log(_.isEqual(data[idx_M_o], graphql_Distributor[idx_GQ]));
						//if (JSON.stringify(data[idx_M_o]) == JSON.stringify(graphql_Distributor[idx_GQ])) {
						//	console.log("Document inserted!")
						//	await saveGraphql(graphql_Distributor[idx_GQ]);
						//} else {
							setTimeout(function () {
								console.log("Database Updated!")
								updateGraphql(graphql_Distributor[idx_GQ]);
							}, 3000);
						//}
						//break;
					}
				}
			}
		}).sort({ updatedAt: -1 }).select('-_id -createdAt -updatedAt -__v');
	}
}

cron.schedule("* * * * *", () => {
	Main.get_summary_endpoint();
});
//dbo.connectToServer.mongoose
//model_oscann.collection.insertMany(Model_Oscann)
//model_distribuidor.collection.insertMany(Model_Oscann);
