'use strict';

const wordDefinitionController = require('./controllers/wordDefinitionController');
const regexWordMatchController = require('./controllers/regexWordMatchController');
const express = require('express');
const app = express();


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

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
