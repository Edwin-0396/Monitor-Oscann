const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
}, { collection: 'Oscann' })

module.exports = mongoose.model('Oscann', dataSchema)
