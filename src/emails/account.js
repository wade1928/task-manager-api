const sgMail = require("@sendgrid/mail");



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "ryanwade1928@gmail.com",
		subject: "Thanks for joining in!",
		text: `Welcome to the app, ${name}. Let me know how you like it.`
	});
};

const sendGoodbyeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: "ryanwade1928@gmail.com",
		subject: "Hate to see you go!",
		text: `Hi ${name}. Is there anything we could have done to keep you?`
	});
};

module.exports = {
	sendWelcomeEmail,
	sendGoodbyeEmail
};

