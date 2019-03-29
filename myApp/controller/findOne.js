'use strict';

const { ConnectDB } = require("../config/conn.js");
const { Entry } = require("../model/Entry.js");

/* Find one item in db by "word" attribute */
async function findOne(seachWord) {
  const conn = new ConnectDB();
  conn.connect();
  let result;
  try {
    result = await Entry.find({
      word: seachWord
    });
    //console.log('Result: ', result);
  } catch (err) {
    console.log("ERROR: ", err);
    result = 500;
  }
  //console.log(result);
  conn.disconnect(() => {
    console.log('disconnected from db...')
  });
  return result;
}

module.exports.findOne = findOne;