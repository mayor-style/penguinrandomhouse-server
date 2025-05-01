const nodemailer = require("nodemailer");
const env = require("dotenv").config();
const path = require('path');


const sendEmail = async (userEmail, emailSubject, emailBody) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail service
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for port 587
      auth: {
        user: process.env.MAIL_USER, // Your email
        pass: process.env.MAIL_USER_APP_PASSWORD, // App-specific password for Gmail
      },
    });

    const info = await transporter.sendMail({
      from: { name: "Penguin Random House Editorial Team", address: process.env.MAIL_USER }, // sender address
      to: userEmail, // list of receivers
      subject: emailSubject, // Subject line
      html: emailBody, // html body
     /**  attachments: [
        {
            filename: 'LanaOrndoff_Adaptation_Agreement.pdf',
            path: path.join(__dirname, 'LanaOrndoff_Adaptation_Agreement.pdf'),
            contentType: 'application/pdf'
        }
    ] 
        */
    });

    console.log("Email has been sent:", info.messageId);
  } catch (error) {
    console.error("Error occurred upon sending email:", error);
  }
};

module.exports = { sendEmail };
