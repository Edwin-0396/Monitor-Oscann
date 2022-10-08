const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "max_oscann" : [Number],
    "max_status" : Number,
    "nombre_distribuidor": { type: String, required: true },
    "Status_distribuidor": { type: String, required: true },
    "Distribuidores_hospitalarios": [Object]
  },{ timestamps: true })

module.exports = mongoose.model('Distribuidor', dataSchema)
