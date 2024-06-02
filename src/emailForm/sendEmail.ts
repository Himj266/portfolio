import nodemailer from "nodemailer";

export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.PERSONAL_EMAIL,
      pass: process.env.PERSONAL_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.PERSONAL_EMAIL,
    to: process.env.TARGET_PERSONAL_EMAIL,
    subject: "Email from your portfolio",
    text: `${name} from ${email} sent you a email \n${message}`,
  };

  const response = await transporter.sendMail(mailOptions);

  return response;
};
