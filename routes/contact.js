var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', { 
  	title: 'Contact'
  });
});

// Send email
router.get('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'johndoe@gmaily.com',
			pass: ''
		}
	});

	var mailOptions = {
		from: '"John Doe" <johndoe@gmaily.com>',
		to: 'sojohndoe@gmaily.com',
		subject: 'Hello from PC Repair',
		text: 'You have a submission from... Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.email,
		email: '<p>You have a submission from...</p> <ul><li>Name: ' + req.body.name + '</li><li> Email: ' + req.body.email + '</li><li> Message: ' + req.body.email + '</li>'
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent ' + info.response);
		res.redirect('/contact');
	});
});

module.exports = router;
