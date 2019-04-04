'use strict';

// get word definition from user input
async function getWordDef(input) {
  try {
    input = input.toLowerCase(); // make lowercase for matching in db
    const results = await axios.get(`*******************************`);
    return results;
  } catch (error) {
    return error;
  }
}

// validate input: not empty and less than 40 characters
function validate(input) {
  if (!input || input.length > 40) {
    alert('Before pressing the Search button, enter a word of less than 40 charaters');
    return false;
  }
  return true;
}

// handle http error messages
function handleErrorMessage(status) {
  $('#errorSection').show();
  let backgroundColor = document.getElementById('errorSection');
  backgroundColor.className = 'red'; // error message background color is red
  if (status === 400) {
    $("#errorCode").text(status);
    $("#errorMessage").text("Bad Request Error");
  } else if (status === 404) {
    $("#errorCode").text("Word Not Found");
    $("#errorMessage").text("Try another word");
    backgroundColor.className = '';
    backgroundColor.className = 'yellow'; // only this one is yellow because it is just not found word
  } else if (status === 500) {
    $("#errorCode").text(status);
    $("#errorMessage").text("Internal Server Error");
  } else {
    // handle unkown error response
    $("#errorCode").text(status);
    $("#errorMessage").text("OOPS, Unkown Error");
  }
}

// handle click events of the search button
$('.search').click(async function () {
  // hide error section
  $('#errorSection').hide();
  // clear search word
  $('#word').text("");
  // clear definition
  $('#definition').text("");
  // get input from user
  let input = $("#autocomplete-input").val();
  $("#autocomplete-input").val("");
  // validate input and handle results
  if (validate(input)) {
    const results = await getWordDef(input);
    // if response then there is an error
    if (results.response) {
      // set html tags for error
      //console.log(results.response.status);
      const status = results.response.status;
      handleErrorMessage(status);
    } else if (results.data) {
      // set html tags for success
      //console.log(results.data);
      // add word to span
      $('#word').text(results.data.word);
      // add definition to span
      $('#definition').text(results.data.definition);
    } else {
      // 500 can be found above in results.response but if the db goes down
      // this will be triggered 
      handleErrorMessage(500);
    }
  }
});