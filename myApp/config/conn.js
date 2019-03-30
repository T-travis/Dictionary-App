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
      .connect("mongodb://localhost/dictionary", {
        useNewUrlParser: true
      })
      .then(() => console.log("connected..."))
      .catch(() => console.log("connection ERROR"));
  }

  disconnect() {
    this.mongoose.disconnect(() => {
      console.log('disconnected from db...')
    });
  }
}

module.exports.ConnectDB = ConnectDB;

