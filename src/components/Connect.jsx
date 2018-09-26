import React from 'react';
// var nodemailer = require('nodemailer');

const Connect = () => (
  <div className="Connect">
    <h1>Connect</h1>
    <div id="info">
      <form action="https://formspree.io/vicfaucon@gmail.com" method="POST">
        <textarea placeholder="Your Message" type="text" name="name" />
        <input placeholder="Your Email" type="email" name="_replyto" />
        <button type="submit" value="Send">Send</button>
      </form>

      {/* <textarea id="emailText" placeholder="Your Message"></textarea>
        <input id="emailAdress" placeholder="Your Email"></input>
        <button onClick={sendEmail($('#emailAdress').val(), $('#emailText').val())}>Send</button> */}
    </div>
  </div>
);
//       const sendEmail = (dest, text) => {

//         console.log($('#emailAddress').val())
//           // Only needed if you don't have a real mail account for testing
//   nodemailer.createTestAccount((err, account) => {
//       // create reusable transporter object using the default SMTP transport
//       let transporter = nodemailer.createTransport({
//           host: 'smtp.ethereal.email',
//           port: 587,
//           secure: false, // true for 465, false for other ports
//           auth: {
//               user: account.user, // generated ethereal user
//               pass: account.pass // generated ethereal password
//           }
//       });

//       // setup email data with unicode symbols
//       let mailOptions = {
//           from: dest, // sender address
//           to: 'vicfaucon@gmail.com', // list of receivers
//           subject: 'iDeos info request', // Subject line
//           text: text, // plain text body
//       };

//       // send mail with defined transport object
//       transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//               return console.log(error);
//           }
//           console.log('Message sent: %s', info.messageId);
//           // Preview only available when sending through an Ethereal account
//           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//           // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//           // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//       });
//   });
//       }
export default Connect;
