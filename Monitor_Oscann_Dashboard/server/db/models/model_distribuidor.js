const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "nombre_distribuidor": { type: String, required: true },
    "Maximo_Distributor" : { type: String, required: true },
    "Distribuidores_hospitalarios": [Object]
  },{ timestamps: true })

module.exports = mongoose.model('Distribuidor', dataSchema)
