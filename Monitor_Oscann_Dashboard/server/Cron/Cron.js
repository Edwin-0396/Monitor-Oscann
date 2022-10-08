/// cron request
const cron = require("node-cron");
const { http, signs } = require("./util");
const Model = require('../db/models/model_distribuidor');
const graphql_response = require("../graphql_response.json");

class Main {
  static async getHoroscope() {
    //result = await http.get("/" + "").data; //endpoint from graphql API

    console.log("funciton Cron")

    //Model.collection.insertOne({todayHoroscope})
    var dict = graphql_response;
    let max_dist = []
    let max_oscann = []
    let max_oscanns_hosp = 0
    let max = 0

    //try to extract the max status
    for (let idx_res = 0; idx_res < dict.length; idx_res++) {
      for (let idx__dh = 0; idx__dh < dict[idx_res].Distribuidores_hospitalarios.length; idx__dh++) {
        for (let id_H = 0; id_H < dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales.length; id_H++) {
          for (let id_Oscann = 0; id_Oscann < dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann.length ; id_Oscann++) {
            let arr = Object.values(dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann[id_Oscann]);
            //console.log(arr[2]);
            
            var arrayOfNumbers = arr.map(Number);
            var arraynumbers = arrayOfNumbers.slice(2, 7);
            max = Math.max(...arraynumbers);
            max_oscann.push(max)

           //console.log(`max value: ${max}`);
           //console.log(typeof(max))
          }
        }
      }
      console.log(max_oscann)
      max_oscanns_hosp = Math.max(...max_oscann)
      console.log("THIS IS THE MAX: ", max_oscanns_hosp)
      max_dist.push(max_oscanns_hosp)
      dict[idx_res].max_oscann = max_oscann
      dict[idx_res].max_status = max_oscanns_hosp
      max_oscann = []
      
      //await console.log(dict[idx_res].Distribuidores_hospitalarios[0].Hospitales[0].Oscann)
      //await console.log(typeof (dict[idx_res]))
    }
    //max_oscann = []
    //


    //console.log(max_dist)

    var dictstring = JSON.stringify(dict);
    var fs = require('fs');
    fs.writeFileSync("graphql_distributor.json", dictstring);
  }
}

cron.schedule("* * * * * *", () => {
  Main.getHoroscope();
});
