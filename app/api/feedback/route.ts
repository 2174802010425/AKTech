import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  const { name, email, text, title} = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    const data = await transporter.sendMail({
      from: `${email}`,
      to: process.env.EMAIL_USER,
      subject: `${title}`,
      text : `${name}`,
      html: `<h1>${text}</h1>`,
      
    });
    return NextResponse.json({ success: "Feedback sent successfully", data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Oops! Something went wrong" });
  }
}
