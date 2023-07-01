const nodemailer = require("nodemailer");

const getTemplate = (name, email, subject, message) => {
  return `
  <div>
  <p>From: ${name}</p>
  <p>Email: ${email}</p>
  <p>Subject: ${subject}</p>
  <p>${message}</p>
</div>
`;
};

export default async function SendMail(req, res) {
  try {
    const from = req.query.name ? req.query.name : "";
    const email = req.query.email ? req.query.email : "";
    const subject = req.query.subject ? req.query.subject : "";
    const message = req.query.message ? req.query.message : "";

    const options = {
      from: `${from} <dk.appmailservice@gmail.com>`,
      to: "dawoodkhatri18@gmail.com",
      subject: "Message from Portfolio",
      html: getTemplate(from, email, subject, message),
    };
    let transpoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transpoter.sendMail(options);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
