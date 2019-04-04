'use strict';

const wordDefinitionController = require('./controllers/wordDefinitionController');
const regexWordMatchController = require('./controllers/regexWordMatchController');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


// search for "word" from path param 
app.get('/api.domain.com/v1/words/:word', async function (req, res) {
  const word = req.params.word;
  //console.log('Param: ', word);
  let result = await wordDefinitionController.findOne(word);
  //console.log('Result: ', result);
  if (result === '404') res.status(404).send('Not Found');
  else if (result === '500') res.status(500).send('Server Error');
  else res.send(result);
});

// use "chars" from path param to find next 10 words related
app.get('/api.domain.com/v1/words/input-chars/:chars', async function (req, res) {
  const chars = req.params.chars;
  //console.log('Param: ', chars);
  const result = await regexWordMatchController.regexQuery(chars);
  //console.log('Result: ', result);
  if (result === '404') res.status(404).send('Not Found');
  else if (result === '500') res.status(500).send('Server Error');
  else res.send(result);
});

// catches all other urls not specified and throws an error
app.get('*', function (req, res) {
  throw new Error("Bad Request");
})
// handles error thrown
app.use(function (err, req, res, next) {
  if (err.message === "Bad Request") {
    res.status(400).send("Bad Request: " + err.message);
  }
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));