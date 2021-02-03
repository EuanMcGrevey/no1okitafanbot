

const fetch = require('node-fetch');

module.exports = async function (msg, args) {

	let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`
	let response = await fetch(url);
	let json = await response.json();

	let posturl = "exampleurl"

	msg.channel.send(json.results[index].url); // sending the url to discord is enough for it to display.
	msg.channel.send('Latest Instagram post from Anri Okita:');
	msg.channel.send(posturl);	
}