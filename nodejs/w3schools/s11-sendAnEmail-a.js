var nodeMailer = require( 'nodemailer' );

var transporter = nodeMailer.createTransport({
	host: 'smtp.office365.com',
	auth: {
		user: 'slank@sdsu.edu',
		pass: '~/d"QA&?D84snrQm'
	}
});

var mailOptions = {
	from: 'slank@sdsu.edu',
	to: 'spence.lank@gmail.com',
	subject: 'this is a test',
	text: 'test text'
}

transporter.sendMail( mailOptions, function( error, info ) {
	if ( error ) {
		console.log( error );
	} else {
		console.log( 'Email sent: ' + info.response );
	}
});

mailOptions = {
	from: 'slank@sdsu.edu',
	to: 'spence.lank@gmail.com',
	subject: 'this is a test',
	html: '<h1>Welcome</h1><p>That was easy!</p>'
}

transporter.sendMail( mailOptions, function( error, info ) {
	if ( error ) {
		console.log( error );
	} else {
		console.log( 'Email sent: ' + info.response );
	}
});
