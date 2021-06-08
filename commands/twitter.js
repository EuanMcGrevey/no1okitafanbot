// !twitter
// poll Anri's Twitter account @AnriOkita_real and post the lastest tweet 

// const fetch = require('node-fetch');

// module.exports = async function (msg, args) {

// 	let url = `https://api.twitter.com/2/users/by/username/:username?user.fields=created_at&tweet.fields=created_at`
// 	let url = `https://api.twitter.com/2/users/:id/tweets?id=${TWITTERANRIID}&`
// 	let response = await fetch(url);
// 	let json = await response.json();

// 	console.log(json);
// 	msg.channel.send(json);
// }

const request = require("request");

module.exports = async function (msg, args) {
	var options = { method: 'GET',
	  url: 'https://api.twitter.com/2/users/1458342684/tweets',
	  headers: 
	   { 'Postman-Token': '5c95f233-c59c-4fc6-ba1d-75f325c6caac',
	     'cache-control': 'no-cache',
	     Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANuyOAEAAAAAQc%2FfZ65%2FMFdyuCR8Zli1tF4eyQg%3DQ9HtENc3guK5nTuXg55oIu71Ra4HGAQ9JBOiLMHJ4wUmrsb5S9' } };

	request(options, { json: true }, (error, response, body) => {
	  if (error) {
	  	console.log("There was an error");
	  	console.log(error);
	  }

	  console.log(body);

	  let latest = body.data;

	  msg.channel.send(latest);
	});
}