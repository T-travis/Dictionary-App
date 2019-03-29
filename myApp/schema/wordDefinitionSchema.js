'use strict';

const mongoose = require("mongoose");

// Schema for Entry class model 
const wordDefinitionSchema = new mongoose.Schema({
  word: String,
  definition: String
});

module.exports.wordDefinitionSchema = wordDefinitionSchema;


