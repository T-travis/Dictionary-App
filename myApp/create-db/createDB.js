"use strict";

const fs = require("fs");
const { ConnectDB } = require("../connection/conn.js");
const { Entry } = require("../model/model.js");


const createDB = async () => {
	let rawdata = fs.readFileSync("./dictionary_alpha_arrays.json");
	let dictionary = JSON.parse(rawdata);
	let count = 0;
	let array = [];
	let i = 0;
	for (i; i < dictionary.length; i++) {
		let j = 0;
		for (let key in dictionary[i]) {
			array[j] = {
				word: key,
				definition: dictionary[i][key]
			};
			j++;
			count++;
		}
		array = sort(array);
		// write to db
		await write(array);
		array = []; // reset array
		//testSorted(array);
		//break;
	}
	console.log("created documents: ", count);
	conn.disconnect(() => {
		console.log('disconntected from db...')
	})
};

async function write(array) {
	for (let i = 0; i < array.length; i++) {
		const item = new Entry({
			word: array[i].word,
			definition: array[i].definition
		});

		try {
			const result = await item.save();
		} catch (err) {
			console.log(err);
		}
	}
}

// sort array by "word" attribute using comparator
function sort(array) {
	array.sort(function (a, b) {
		const wordA = a.word.toUpperCase(); // ignore upper and lowercase
		const wordB = b.word.toUpperCase(); // ignore upper and lowercase
		if (wordA < wordB) {
			return -1;
		}
		if (wordA > wordB) {
			return 1;
		}
		// words must be equal
		return 0;
	});
	return array;
}

// for testing sort method
function testSorted(array) {
	// test if sorted
	let test = [];
	let i = 0;
	for (let obj in array) {
		test[i] = array[obj].word;
		i++;
	}
	console.log(test);
	console.log(!!test.reduce((n, item) => n !== false && item >= n && item));
}

const conn = new ConnectDB();
conn.connect();
createDB();