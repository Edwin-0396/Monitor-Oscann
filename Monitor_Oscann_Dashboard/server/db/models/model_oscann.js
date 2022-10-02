const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	ID: String
}, { timestamps: true}, { collection: 'Oscanns' })

module.exports = mongoose.model('Oscanns', dataSchema)
