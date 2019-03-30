'use strict';

const regexWordMatch = require('../models/regexWordMatchModel.js');

/* 
  Search for documents with "word" attribute staring with "input" variable
  and return 10 following words including the searched  
*/
async function regexQuery(input) {
  const data = await regexWordMatch.regexQuery(input);
  //console.log(data);
  // check for status codes 500 or 404 or return data
  if (data === '500') {
    return data;
  } else if (data.length === 0) {
    return '404';
  } else {
    return data;
  }
}

module.exports.regexQuery = regexQuery;