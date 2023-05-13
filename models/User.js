const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	id_number: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('sedob-users', UserSchema)