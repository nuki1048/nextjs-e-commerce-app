const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "nik456618@gmail.com",
    pass: "zxhpscjnuatsthpu",
  },
});

export async function sendMessage(emailDetails) {
  transport.sendMail(emailDetails, (err, info) => {
    if (err) {
      throw err;
    } else {
      console.log(info);
    }
  });
}
