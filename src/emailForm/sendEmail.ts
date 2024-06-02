import { mailjet } from "@/emailForm/mailjet";

export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const request = await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: email,
          Name: name,
        },
        To: {
          Email: process.env.PERSONAL_EMAIL,
          Name: "Himanshu Jain",
        },
        Subject: `${name} want to contact from your portfolio`,
        TextPart: message,
        HTMLPart: message,
      },
    ],
  });

  return request;
};
