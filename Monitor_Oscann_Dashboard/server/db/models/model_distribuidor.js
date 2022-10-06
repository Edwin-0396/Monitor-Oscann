const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "nombre_distribuidor": { type: String, required: true },
    "Status_distribuidor": { type: String, required: true }
  },{ timestamps: true })

module.exports = mongoose.model('Distribuidor', dataSchema)
