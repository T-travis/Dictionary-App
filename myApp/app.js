'use strict';

const wordDefinitionController = require('./controllers/wordDefinitionController');
const regexWordMatchController = require('./controllers/regexWordMatchController');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


// search for "word" from path param 
app.get('/www.api.brokenprogrammer.com/v1/words/:word', async function (req, res) {
  const word = req.params.word;
  //console.log('Param: ', word);
  let result = await wordDefinitionController.findOne(word);
  //console.log('Result: ', result);
  if (result === '404') res.status(404).send('Not Found');
  else if (result === '500') res.status(500).send('Server Error');
  else res.send(result);
});

// use "chars" from path param to find next 10 words related
app.get('/www.api.brokenprogrammer.com/v1/words/input-chars/:chars', async function (req, res) {
  const chars = req.params.chars;
  //console.log('Param: ', chars);
  const result = await regexWordMatchController.regexQuery(chars);
  //console.log('Result: ', result);
  if (result === '404') res.status(404).send('Not Found');
  else if (result === '500') res.status(500).send('Server Error');
  else res.send(result);
});

// catches all other urls not specified and throws an error
app.all('*', function (req, res) {
  throw new Error("Bad Request");
})
// handles error thrown
app.use(function (err, req, res, next) {
  const method = req.method; // get method request type
  // only GET is allowed
  if (method !== 'GET') {
    console.log(err.message)
    const html = '<h1>405</h1><h3>' + method + ' method not allowed</h3>';
    res.status(405).send(html);
  }
  // wrong url path
  else if (err.message === "Bad Request") {
    const html = '<h1>400</h1><h3>' + err.message + '</h3>';
    res.status(400).send(html);
  }
})

app.listen(8080, "172.31.30.173");