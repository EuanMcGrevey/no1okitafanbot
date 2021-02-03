// TODO alt text, no search results, credit the gif with url, 

const fetch = require('node-fetch');

module.exports = async function (msg, args) {
	let keywords = 'Honkai Impact'; // default lookup for getting a gif
	if (args.length > 0) { // if specified, lookup that instead
		keywords = args.join(" "); //tokens.slice(1, tokens.length).join(" ");
	}

	let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`
	let response = await fetch(url);
	let json = await response.json();

	const index = Math.floor(Math.random() * json.results.length);
	msg.channel.send(json.results[index].url); // sending the url to discord is enough for it to display.
	msg.channel.send('GIF from Tenor: ' + keywords);	
}