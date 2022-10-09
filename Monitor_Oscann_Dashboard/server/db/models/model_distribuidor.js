const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "Max_Oscann" : [Number],
    "Max_Hospital" : [Number],
    "Max_Dist_Hosp": [Number],
    "Max_Distribuidor": [Number],
    "nombre_distribuidor": { type: String, required: true },
    "Status_distribuidor": { type: String, required: true },
    "Distribuidores_hospitalarios": [Object]
  },{ timestamps: true })

module.exports = mongoose.model('Distribuidor', dataSchema)
