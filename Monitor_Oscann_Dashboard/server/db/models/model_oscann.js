const mongoose = require('mongoose');

const OscannSchema = new mongoose.Schema({
		name_oscann: { type: String, required: true },
		network_status: { type: String, required: true },
		network_value: { type: String, required: true },
		ram_status: { type: String, required: true },
		ram_value: { type: String, required: true },
		cpu_status: { type: String, required: true },
		cpu_value: { type: String, required: true },
		drive_status: { type: String, required: true },
		drive_value: { type: String, required: true },
		ledservice_status: { type: String, required: true },
		ledservice_value: { type: String, required: true },
		camera_status: { type: String, required: true },
		camera_value: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('oscanns', OscannSchema);
