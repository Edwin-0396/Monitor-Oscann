const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: String
},{ timestamps: true }, { collection: 'Distribuidor' })

module.exports = mongoose.model('Distribuidor', dataSchema)
