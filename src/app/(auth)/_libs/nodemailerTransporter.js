import JWT from "jsonwebtoken";

import nodemailer from "nodemailer"



function createTransporter() {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return transporter;
}

export async function sendSignUpEmail({ email, subject }) {
  const transporter = createTransporter();

  const token = JWT.sign({email},process.env.JWT_SECRET,{expiresIn:"15m"})


  const url = `${process.env.BASE_URL}/signup/verify?token=${encodeURI(token)}`;
  
  console.log(url);

  const mailOptions = {
    from: process.env.SMTP_USERNAME,
    to: email,
    subject: subject || "Message from Your ShopVessels",
    html:`
    <p>Hello,</p>
    <p>Thank you for signing up with ShopVessels!</p>
    <p>Please click the button below to verify your account:</p>
    <a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Verify Account</a>
    <p>If you didn't sign up for ShopVessels, please ignore this email.</p>
    <p>Thank you,</p>
    <p>The ShopVessels Team</p>
    `
  };

  return "SUCCESS"

  // Return a promise to handle asynchronous sending
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}
