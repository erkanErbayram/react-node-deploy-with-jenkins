const nodemailer = require("nodemailer");

const SendMailController = async (req, res) => {
  const { email, content, additionalContent } = req.body;
  try {
    if (!email || !content) {
      return res.status(400).json({ error: "Email and content are required" });
    }

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: email,
      subject: "Subject",
      text: `Content: ${content}\n ${additionalContent || ""}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("E-mail sending error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      console.log("E-mail sent:", info.response);
      res.status(200).json({ success: "Email sent successfully" });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
module.exports = SendMailController;
