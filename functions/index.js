const functions = require('firebase-functions'),
    mailer = require('nodemailer');

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.sendMail = functions.https.onRequest((rq, rs) => {
     if (rq.method.toUpperCase() === 'POST') {
         let data = rq.body,
             name = data.name,
             email = data.email,
             subject = data.subject,
             message = data.message,
             SMTPConfig = {
                 host: 'smtp.google.com',
                 port: 465,
                 secure: true,
                 auth: {
                     user: 'joncolab@gmail.com',
                     pass: 'jonco2017'
                 },
                 tls: {
                     rejectUnauthorized: false
                 }
             },
             transporter = mailer.createTransport(SMTPConfig),
             mail = {
                from: '"' + name + '" <' + email + '>',
                 to: 'Jonco Lab <joncolab@gmail.com>',
                 subject: subject,
                 text: message
             };
         transporter.sendMail(mail, function (error, info) {
             if (error) {
                 rs.send(error);
             } else {
                 rs.send(info);
             }
         });
     } else {
         rs.send('SERVER ERROR!');
     }
 });