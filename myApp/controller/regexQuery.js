'use strict';

const {
  ConnectDB
} = require("../config/conn.js");
const {
  Entry
} = require("../model/Entry.js");

/* 
  Search for documents with "word" attribute staring with "input" variable
  and return 10 following words including the searched  
*/
async function regexQuery(input) {
  const conn = new ConnectDB();
  conn.connect();
  let result;
  try {
    result = await Entry
      .find({
        word: {
          $regex: `^${input}`,
          $options: "i"
        }
      })
      .limit(10)
      .sort({
        word: 1
      })
      .select({
        word: 1
      });
  } catch (err) {
    console.log("ERROR: ", err);
    result =  500;
  }
  //console.log('Result: ', result);
  conn.disconnect(() => {
    console.log('disconnected from db...')
  });
  return result;
}

module.exports.regexQuery = regexQuery;