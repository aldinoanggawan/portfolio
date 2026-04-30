import { Resend } from 'resend';

import { contactSchema } from '@/lib/validations/contact';

let resend: Resend | null = null;

const getResend = (): Resend => {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }

  return resend;
};

export async function POST(request: Request) {
  try {
    const resend = getResend();
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0].message },
        { status: 400 },
      );
    }

    const { name, email, message, _honey } = result.data;

    if (_honey) {
      return Response.json({ success: true });
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL as string,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Internal server error';
    return Response.json({ error: message }, { status: 500 });
  }
}
