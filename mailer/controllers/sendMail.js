const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jessyca.monahan@ethereal.email",
      pass: "YD2Mua8h53EJgmbgmf",
    },
  });

  let info = await transporter.sendMail({
    from: '"HII Vinayak 👻" <foo@example.com>', // sender address
    to: "singhvinayak67@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};

module.exports = sendMail;
