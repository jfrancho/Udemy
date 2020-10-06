const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const recipientsSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: false}
});

module.exports = recipientsSchema;
