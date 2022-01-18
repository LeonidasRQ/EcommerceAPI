const nodemailer = require('nodemailer');
const { config } = require('./config/config');

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: config.emailAddress,
      pass: config.emailPassword,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: config.emailAddress, // sender address
    to: config.emailAddress, // list of receivers
    subject: 'Este es un nuevo email', // Subject line
    text: 'Sirvelo', // plain text body
    html: '<b>Sirvelo</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail();
