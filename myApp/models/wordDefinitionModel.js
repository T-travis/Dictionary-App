const { ConnectDB } = require("../config/conn.js");
const { Entry } = require("./Entry.js");


/* Find one item in db by "word" attribute */
async function findOne(seachWord) {
  // init db conn object
  const conn = new ConnectDB();
  // result will be either a error status code or db findOne result
  let result;
  // search for "searchWord" in db
  try {
    // connect to db
    conn.connect();
    // search db for searchWord
    result = await Entry.findOne({
      word: seachWord
    })
    .select({
      _id: 0
    });
    //console.log('Result: ', result);
  } catch (err) {
    // catch server error with 500 status code
    //console.log("ERROR: ", err);
    result = '500';
  }
  // end db connection
  conn.disconnect(() => {
    //console.log('disconnected from db...')
  });
  // return result to controller
  return result;
}

module.exports.findOne = findOne;