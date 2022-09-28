const mongoose = require('mongoose')

const record_Oscann = new mongoose.Schema({
	CPU: String,
    Ram: Number,
    DD: Number
});

module.exports = mongoose.model("Oscann", record_Oscann);