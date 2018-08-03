"use strict";

let express = require('express'),
    compression = require('compression'),
    path = require('path'),
    sslRedirect = require('heroku-ssl-redirect'),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv-safe'),
    app = express();

dotenv.load({
  allowEmptyValues: true
});

app.set('port', process.env.PORT || 8080); //sets port

if (process.env.NODE_ENV == 'production') app.use(sslRedirect());

app.use('/', express.static(__dirname + '/build'));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Adding CORS support
app.all('*', function (req, res, next) {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    // CORS Preflight
    res.send();
  } else {
    next();
  }
});

// The environment variables below are in the .env file for a local environment or set as config vars on the server
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
    expires: 3600
  }
});

let handleEmail = (req, res, next) => {

  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;

  let mailOptions = {
    replyTo: {
      name: name,
      address: email
    },
    to: 'Brian Hamilton <hmltnbrn@gmail.com>',
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(200).json({sent: false});
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    return res.status(200).json({sent: true});
  });

}

app.post('/send', handleEmail);

//Handle Main Page
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Handle 500
app.use(function(err, req, res, next) {
  res.status(500).send('500: Internal Server Error');
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
