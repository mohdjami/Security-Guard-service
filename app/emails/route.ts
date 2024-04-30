import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, text } = await req.json();
  try {
    const data = await resend.emails.send({
      from: `${email} <noreply@resend.dev>`,
      to: "eagleviewservicecanada@gmail.com",
      subject: "Query regarding Eagle View Security",
      text: text,
      react: EmailTemplate({ firstName: name, text: text }),
    });
    return NextResponse.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
