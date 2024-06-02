import { sendEmail } from "@/emailForm/sendEmail";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const { name, email, message } = reqBody;

  try {
    const response = await sendEmail({ name, email, message });

    return new Response(JSON.stringify({ sucess: "ok" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ sucess: "fail" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
