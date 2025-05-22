import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const emailTo = process.env.EMAIL_TO || 'blueberrygardens2021@gmail.com';

const allowedOrigins = [
  'https://blueberrygardens.ge',
  'https://www.blueberrygardens.ge',
  'http://localhost:3000'
];

function getCorsHeaders(origin: string | null) {
  return {
    'Access-Control-Allow-Origin': origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Accept-Language, Origin',
    'Access-Control-Max-Age': '86400',
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get('origin');
  return new NextResponse(null, {
    status: 200,
    headers: getCorsHeaders(origin),
  });
}

function validateEnvVariables() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error('Missing email configuration environment variables');
    throw new Error('Email configuration not set');
  }
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  try {
    validateEnvVariables();

    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: getCorsHeaders(origin) }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    try {
      const verifyResult = await transporter.verify();
      console.log('SMTP Connection verified:', verifyResult);

      const emailResult = await transporter.sendMail({
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
      
      console.log('Email sent:', emailResult);
      return NextResponse.json({ success: true }, { headers: getCorsHeaders(origin) });
    } catch (emailError) {
      console.error('SMTP Error:', emailError);
      return NextResponse.json(
        { 
          error: 'Email service unavailable', 
          details: emailError || 'SMTP connection failed'
        },
        { status: 503, headers: getCorsHeaders(origin) }
      );
    }
  } catch (error) {
    console.error('Configuration error:', error);
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500, headers: getCorsHeaders(origin) }
    );
  }
}
