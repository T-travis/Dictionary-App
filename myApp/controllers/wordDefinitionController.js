'use strict';

const wordDefinition = require('../models/wordDefinitionModel.js');

/* Find one item in db by "word" attribute */
async function findOne(seachWord) {
  const data = await wordDefinition.findOne(seachWord);
  //console.log(data);
  // check for status codes 500 or 404 or return data
  if (data === '500') {
    return data;
  } else if (!data) {
    return '404';
  } else {
    return data;
  } 
}

module.exports.findOne = findOne;

