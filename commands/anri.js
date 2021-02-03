const replies = [
		'Soon^tm',
		'Ask Onooboo when the bot will be done',
		'Try again later'
	]

module.exports = function (msg, args) {
	const index = Math.floor(Math.random() * replies.length);
	msg.channel.send(replies[index]);
}