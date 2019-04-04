'use strict';

const { ConnectDB } = require("../config/conn.js");
const { Entry } = require("./Entry.js");

/* 
  Search for documents with "word" attribute staring with "input" variable
  and return 10 following words including the searched  
*/
async function regexQuery(input) {
  // connect to db
  const conn = new ConnectDB();
  conn.connect();
  let result;
  // search for related words using "input"
  try {
    result = await Entry
      .find({
        word: {
          $regex: `^${input}`,
          $options: "i"
        }
      })
      .limit(4)
      .sort({
        word: 1
      })
      .select({
        word: 1,
        _id: 0
      });
  } catch (err) {
    // catch server error with 500 status code
    //console.log("ERROR: ", err);
    result = '500';
  }
  //console.log('Result: ', result);
  // end db connection
  conn.disconnect(() => {
    //console.log('disconnected from db...')
  });
  // return results to controller
  return result;
}

module.exports.regexQuery = regexQuery;