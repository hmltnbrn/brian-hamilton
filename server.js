"use strict";

let express = require('express'),
    compression = require('compression'),
    path = require('path'),
    sslRedirect = require('heroku-ssl-redirect'),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv-safe'),
    axios = require('axios'),
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
    user: process.env.GMAIL_AUTH_EMAIL,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    accessToken: process.env.GMAIL_ACCESS_TOKEN,
    expires: 3600
  }
});

app.post('/send', async (req, res, next) => {

  let mailOptions = {
    replyTo: {
      name: req.body.name,
      address: req.body.email
    },
    to: process.env.MAIL_TO_ADDRESS,
    subject: req.body.subject,
    text: req.body.message
  };

  let secret = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
  let recaptcha = req.body.recaptcha;
  let ip = req.ip;

  try {
    var captchaCall = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptcha}&removeip=${ip}`, {}, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        },
      },
    );
  } catch (e) {
    console.log(e);
    return res.status(200).json({sent: false});
  }

  if(captchaCall.data.success === true) {
    try {
      var mail = await transporter.sendMail(mailOptions);
      console.log('Message %s sent: %s', mail.messageId, mail.response);
      return res.status(200).json({sent: true});
    } catch (e) {
      console.log(e);
      return res.status(200).json({sent: false});
    }
  }

  return res.status(200).json({sent: false});

});

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
