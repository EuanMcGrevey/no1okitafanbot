console.log('Beep Beep!');

require("dotenv").config();

const Discord = require('discord.js'); // imports the discord.js module
const client = new Discord.Client();   // the client is the javascript object that connects to the discord API itself to run the bot

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
	console.log('Discord authentication successful');
}

const commandHandler = require('./commands'); // ./ tells require to look locally instead of for an installed node module like discord.js

client.on('message', commandHandler);