const mongoose = require("mongoose");
require('dotenv').config();

const db_uri = process.env.MONGO_URI;

module.exports = () => mongoose.connect(db_uri)