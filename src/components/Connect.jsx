import React from 'react';
// import nodemailer from 'nodemailer';

const Connect = () => {

//     const sendEmail = (dest, text) => {
//         // Only needed if you don't have a real mail account for testing
// nodemailer.createTestAccount((err, account) => {
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: account.user, // generated ethereal user
//             pass: account.pass // generated ethereal password
//         }
//     });

//     // setup email data with unicode symbols
//     let mailOptions = {
//         from: dest, // sender address
//         to: 'vicfaucon@gmail.com', // list of receivers
//         subject: 'iDeos info request', // Subject line
//         text: text, // plain text body
//     };

//     // send mail with defined transport object
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     });
// });
//     }



    return (
    <div className="Connect">
    <h1>Connect</h1>
        <div id="info">
            <textarea placeholder="Your Message"></textarea>
            <input placeholder="Your Email"></input>
            <button>Send</button>
        </div>
    </div>
    )
}

export default Connect;