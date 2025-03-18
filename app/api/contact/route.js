import nodemailer from "nodemailer";

export async function POST(request, response) {
  try {
    const { fullName, email, message } = request.body;
    if (!fullName || !email || !message) {
      response.status(400).json({ error: "Missing required fields" });
      return;
    }
    nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: "ch3tan5aini@gmail.com",
        pass: "psbsiatwjvnnnorj",
      },
    });
    const emailMessage = {
      from: email,
      to: "ch3tan5aini@gmail.com",
      subject: `From ${fullName}, Portfolio Contact Form`,
      text: message,
    };
    await transpoter.sendMail(emailMessage);
    response.status(200).json({ message: "Email sent" });
  } catch (error) {
    response.status(500).json({ error: error.message });
    console.log(error);
  }
}
