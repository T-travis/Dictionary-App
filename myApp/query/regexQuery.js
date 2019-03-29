'use strict';

const { ConnectDB } = require("../connection/conn.js");
const { Entry } = require("../model/model.js");

/* 
  Search for documents with "word" attribute staring with "input" variable
  and return 10 following words including the searched  
*/
async function regexQuery(input) {
  const result = await Entry
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
  console.log(result);
  conn.disconnect(() => {
    console.log('disconnected from db...')
  });
  return result;
}

const conn = new ConnectDB();
conn.connect();
//regexQuery("th");

module.exports.regexQuery = regexQuery;