'use strict';

const queryOne = require('./query/findOne.js');
const queryRegex = require('./query/regexQuery.js');
const express = require('express');
const app = express();

// NEEDS MVP IMPLEMENTED

// 
app.get('/api.domain.com/v1/word/:word', async function (req, res) {
  const word = req.params.word;
  //console.log(word);
  const result = await queryOne.findOne(word);
  //console.log(result);
  res.send(result);
})

// 
app.get('/api.domain.com/v1/word/input/:chars', async function (req, res) {
  const chars = req.params.chars;
  console.log(chars);
  const result = await queryRegex.regexQuery(chars);
  console.log(result);
  res.send(result);
})
  
app.listen(3000, () => console.log(`Example app listening on port 3000!`));