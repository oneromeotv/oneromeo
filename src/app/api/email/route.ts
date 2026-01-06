import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail = process.env.SEND_EMAIL_ADDRESS || '   ';
const myEmail = process.env.MY_EMAIL_ADDRESS || '   ';

export async function POST(request: Request) {
  try {
    const { email, name, message, subject } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'OneRomeo <' + sendEmail + '>',
      to: myEmail, // Send the message TO yourself
      replyTo: email, // So you can hit "Reply" in your inbox to email them back
      subject: `New Message from ${name}: ${subject || 'General Inquiry'}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>New "Say Hi" Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) return NextResponse.json({ error }, { status: 400 });
    return NextResponse.json({ data });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
