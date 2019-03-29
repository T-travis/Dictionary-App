'use strict';

const queryOne = require('./controller/findOne.js');
const queryRegex = require('./controller/regexQuery.js');
const express = require('express');
const app = express();


// 
app.get('/api.domain.com/v1/words/:word', async function (req, res) {
  const word = req.params.word;
  //console.log('Param: ', word);
  let result = await queryOne.findOne(word);
  //console.log('Result: ', result);
  if (result.length === 0) res.status(404).send('Not Found');
  else if (result === '500') res.status(500).send('Server Error');
  else res.send(result);
});

// 
app.get('/api.domain.com/v1/words/input-chars/:chars', async function (req, res) {
  const chars = req.params.chars;
  //console.log('Param: ', chars);
  const result = await queryRegex.regexQuery(chars);
  //console.log('Result: ', result);
  if (result.length === 0) res.status(404).send('Not Found');
  else if (result === '500') res.status(500).send('Server Error');
  else res.send(result);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));