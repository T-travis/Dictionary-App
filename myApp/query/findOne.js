'use strict';

const { ConnectDB } = require("../connection/conn.js");
const { Entry } = require("../model/model.js");

/* Find one item in db by "word" attribute */
async function findOne(seachWord) {
  const result = await Entry.find({
    word: seachWord
  });
  //console.log(result);
  conn.disconnect(() => {
    console.log('disconnected from db...')
  });
  return result;
}

const conn = new ConnectDB();
conn.connect();
//findOne();

module.exports.findOne = findOne;