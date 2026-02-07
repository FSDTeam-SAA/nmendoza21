import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("Missing SMTP credentials");
      return NextResponse.json(
        { error: "Internal server error: Missing configuration" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
          <p style="font-size: 12px; color: #888;">This email was sent from the contact form on your website.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    );
  }
}