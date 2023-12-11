const express = require("express");
const app = express();
const sendMail = require("./controllers/sendMail");

let PORT = 3000;

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/sendemail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am LIVE in the port:${PORT}`);
    });
  } catch (error) {}
};

start();
