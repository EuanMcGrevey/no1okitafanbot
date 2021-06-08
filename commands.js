// TODO: automate the require process using node file system module. Read the 
// TODO: help command to explain the bot and existing commands.

const anri = require('./commands/anri.js');
const gif = require('./commands/gif.js');
const insta = require('./commands/insta.js');
const twitter = require('./commands/twitter.js');

const commands = { anri, gif, insta, twitter };

// note: function does not need a name anymore as it is saved to the variable commandHandler in bot.js
module.exports = async function (msg) {
	
	if (msg.channel.id == process.env.CHANNELID) {
		console.log(msg.content); // logs all messages sent to test channel

		let tokens = msg.content.split(' ');
		let command = tokens.shift(); // https://www.w3schools.com/jsref/jsref_shift.asp

		if (command.charAt(0) === '!') { // valid command
			command = command.substring(1); // remove the !
			commands[command](msg, tokens); // lookup and call the command 
		}
	}
	
}