// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require('dotenv').config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);


const sendMsg = function(phone_number){
  client.messages
  .create({
     body: 'Your order is placed.',
     from: '+15879057052',
     to: process.env.TO_PHONE_NUMBER
   })
  .then(message => console.log(message.sid));

}

module.exports = sendMsg;
