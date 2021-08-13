const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_API_EMAIL,
    subject: "Welcome to TaskingApp",
    text: `welcome to the app, ${name}. Have any queries, reach asap.`,
    html: `<strong>Big Welcome, ${name}</strong>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent to " + email);
    })
    .catch((error) => {
      console.error(error);
    });
};

const sendByeEmail = async (email, name) => {
  const message = {
    to: email,
    from: "19mrzoro98@gmail.com",
    subject: `Sorry to see you go, ${name}`,
    text: "It was nice knowing you. We hope to see u soon",
  };
  try {
    const response = await sgMail.send(message);
    console.log("Bye Email sent to " + email);
  } catch (error) {
    console.log("Faild to send Bye Email to " + email);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail,
};
