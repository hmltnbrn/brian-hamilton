"use strict";

let express = require('express'),
    compression = require('compression'),
    path = require('path'),
    cors = require('cors'),
    sslRedirect = require('heroku-ssl-redirect'),
    nodemailer = require('nodemailer'),
    { google } = require("googleapis"),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv-safe'),
    axios = require('axios'),
    asyncWrap = require('./middleware').asyncWrap,
    app = express();

dotenv.load({
  allowEmptyValues: true
});

app.use(cors());

// if (process.env.NODE_ENV == 'production') app.use(sslRedirect());
app.use(sslRedirect(['production']));

app.use('/', express.static(path.join(__dirname, 'build')));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

app.post('/send', asyncWrap(async (req, res, next) => {

  const { token } = await oauth2Client.getAccessToken();

  //The environment variables below are in the .env file for a local environment or set as config vars on the server
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_AUTH_EMAIL,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: token,
      expires: 3600
    }
  });

  const mailOptions = {
    replyTo: {
      name: req.body.name,
      address: req.body.email
    },
    to: process.env.MAIL_TO_ADDRESS,
    subject: req.body.subject,
    text: req.body.message
  };

  const secret = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
  const recaptcha = req.body.recaptcha;
  const ip = req.ip;

  const captchaCall = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptcha}&removeip=${ip}`, {}, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    },
  );

  if(captchaCall.data.success) {
    const mail = await transporter.sendMail(mailOptions);
    console.log('Message %s sent: %s', mail.messageId, mail.response);
    return res.status(200).json({sent: true});
  }

  return res.status(200).json({sent: false});

}));

//Handle Main Page
app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if(err.status == 500) console.error(err);
  console.log(err);
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
