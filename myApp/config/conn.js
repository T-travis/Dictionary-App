'use strict';

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Connect to db class
class ConnectDB {

  constructor() {
    this.mongoose = mongoose;
  }

  connect() {
    this.mongoose
      .connect("**********************", {
        useNewUrlParser: true
      })
      .then(() => {
        //console.log("connected...")
      })
      .catch((err) => {
        //console.log("connection ERROR");
        process.exit(0);
      });
  }

  disconnect() {
    this.mongoose.disconnect(() => {
      //console.log('disconnected from db...')
    });
  }
}

module.exports.ConnectDB = ConnectDB;
