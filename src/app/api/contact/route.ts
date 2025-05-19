import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const emailTo = process.env.EMAIL_TO || 'blueberrygardens2021@gmail.com';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept-Language',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

function validateEnvVariables() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error('Missing email configuration environment variables');
    throw new Error('Email configuration not set');
  }
}

export async function POST(req: Request) {
  try {
    validateEnvVariables();

    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
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
      return NextResponse.json({ success: true }, { headers: corsHeaders });
    } catch (emailError) {
      console.error('SMTP Error:', emailError);
      return NextResponse.json(
        { 
          error: 'Email service unavailable', 
          details: emailError || 'SMTP connection failed'
        },
        { status: 503, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error('Configuration error:', error);
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
