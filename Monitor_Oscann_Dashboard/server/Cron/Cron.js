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
          for (let id_Oscann = 0; id_Oscann < dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann.length ; id_Oscann++) {
            let arr = Object.values(dict[idx_res].Distribuidores_hospitalarios[idx__dh].Hospitales[id_H].Oscann[id_Oscann]);
            
            var arrayOfNumbers = arr.map(Number);
            var arraynumbers = arrayOfNumbers.slice(2, 7);
            max_oscann_D = Math.max(...arraynumbers);
            max_Oscann.push(max_oscann_D)
            max_OSCAN.push(max_oscann_D)
          }
          //console.log(max_Oscann)
          max_oscann_H = Math.max(...max_Oscann);
          max_H.push(max_oscann_H)
          max_HOSP.push(max_oscann_H)
          max_Oscann = []
        }
        //console.log(max_HOSP)
        max_oscann_DH = Math.max(...max_H);
        max_DH.push(max_oscann_DH)
        MAX_DH.push(max_oscann_DH)
        max_H = []
      }
      //console.log(MAX_DH)

      max_oscann_D = Math.max(...max_DH)
      max_D.push(max_oscann_D)
      max_DH = []      
      //await console.log(dict[idx_res].Distribuidores_hospitalarios[0].Hospitales[0].Oscann)
      //await console.log(typeof (dict[idx_res]))
      dict[idx_res].Max_Oscann = max_OSCAN
      dict[idx_res].Max_Hospital = max_HOSP
      dict[idx_res].Max_Dist_Hosp = MAX_DH
      dict[idx_res].Max_Distribuidor = max_D
    }
    
    /*console.log("Maximo de oscann: ",max_OSCAN)
    console.log("maximo de hospitales:  ",max_HOSP)
    console.log("maximo de dist_hosp: ",MAX_DH)
    console.log("maximo distr: " ,max_D)*/

    var dictstring = JSON.stringify(dict);
    var fs = require('fs');
    fs.writeFileSync("graphql_distributor.json", dictstring);
  }
}

cron.schedule("* * * * * *", () => {
  Main.getHoroscope();
});
