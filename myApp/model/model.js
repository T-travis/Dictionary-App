'use strict';

const mongoose = require("mongoose");
const schema = require('../schema/wordDefinitionSchema.js');

// Entry class for making key: value entries in the dictionary db
const Entry = mongoose.model('Entry', schema.wordDefinitionSchema);

module.exports.Entry = Entry;