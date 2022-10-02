const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,

}, { timestamps: true}, { collection: 'oscanns' })

module.exports = mongoose.model('oscanns', dataSchema)
