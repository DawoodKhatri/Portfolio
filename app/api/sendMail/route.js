import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { from, email, subject, message } = await req.json();

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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
