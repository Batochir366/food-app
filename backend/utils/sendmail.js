import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendmail = async (email, subject, text) => {
  const info = {
    from: `Food delivery <${process.env.EMAIL}>`,
    to: email,
    subject: subject,
    text: text,
  };
  try {
    return await transporter.sendMail(info);
  } catch (err) {
    console.log(err, "error");
  }
};
