// TODO: research instagram 'subscriptions' - instagram callback to a url of your choice that I can potentially use to update the discord when a new post is made.

const fetch = require('node-fetch');

module.exports = async function (msg, args) {

	var ig = require('instagram-node').instagram();

	// TODO: authentication doesn't work, please help. I don't get any of this.

	// Every call to `ig.use()` overrides the `client_id/client_secret`
	// or `access_token` previously entered if they exist.
	// ig.use({ access_token: `${process.env.INSTAAUTHCODE}` }); // is this necessary if we use client id / client secret? - think so as use() has an else if for either access_token or both client id/secret
	ig.use({ client_id: `${process.env.INSTAAPPID}`, client_secret: `${process.env.INSTAAPPSECRET}` });	
	

	/* OPTIONS: { [count], [min_timestamp], [max_timestamp], [min_id], [max_id] }; */
	ig.user_media_recent(`${process.env.INSTAANRIUSERID}`, function(err, medias, pagination, remaining, limit) {
		if (err) {
			console.log(err);
		} else if (medias) {
			console.log(medias);
		}
	});

}