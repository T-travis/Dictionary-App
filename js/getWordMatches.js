'use strict';

// as characters are entered in the the input tag, get 
// relevant matches from db
async function getCharMatches(chars) {
  try {
    chars = chars.toLowerCase();
    const results = await axios.get(`http://www.api.brokenprogrammer.com/v1/words/input-chars/${chars}`);
    return results;
  } catch (error) {
    //console.log("error");
    return error;
  }
}

// when documnet object is ready
$(document).ready(function () {

  // hide error section 
  $('#errorSection').hide();

  // jquery version
  $('#autocomplete-input').on('input', async function (e) {

    // get matches for current char entered into input
    const results = await getCharMatches(this.value);
    //console.log(results.data);
    const hints = {};
    // iterate over results and store in hints
    for (let object of results.data) {
      hints[object.word] = null; // key needs to be null
    }

    // this makes the autocomplete dropdown
    $('#autocomplete-input').autocomplete({
      data: hints,
      limit: 4,
      minLength: 1,
      autoFocus: true
    });

  });

});