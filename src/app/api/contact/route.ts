import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const emailTo = process.env.EMAIL_TO || 'blueberrygardens2021@gmail.com';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept-Language',
    },
  });
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    try {
      await transporter.verify(); // Verify connection configuration
      await transporter.sendMail({
        from: email,
        to: emailTo,
        subject: `[${baseUrl}] New Contact Form Message from ${firstName} ${lastName}`,
        text: message,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
    } catch (emailError) {
      console.error('Nodemailer error:', emailError);
      return NextResponse.json(
        { error: 'Email service unavailable' },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
}
