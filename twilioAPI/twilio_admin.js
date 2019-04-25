// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

require('dotenv').config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);


const sendMsgAdmin = function(phone_number){
  client.messages
  .create({
     body: 'The order is placed. Please go to /admin and input wait time',
     from: '+15879057052',
     to: process.env.TO_ADMIN_PHONE_NUM
   })
  .then(message => console.log(message.sid));

}

module.exports = sendMsgAdmin;
