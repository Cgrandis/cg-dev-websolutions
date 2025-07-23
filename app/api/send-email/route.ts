import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactEmailTemplate from '../../../components/ContactEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const apiResponse = (success: boolean, message: string, data: any = null, error: any = null, status: number) => {
  return NextResponse.json(
    {
      success,
      message,
      data,
      error,
    },
    { status }
  );
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const postcode = formData.get('postcode') as string;
    const description = formData.get('description') as string;

    if (!name || !email || !description) {
      return apiResponse(
        false,
        'Validation failed. Please ensure all required fields are filled.',
        null,
        {
          code: 'VALIDATION_ERROR',
          fields: ['name', 'email', 'description'],
        },
        400
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Website Contact Form <onboarding@resend.dev>',
      to: ['carlos.e.grandis@gmail.com'], 
      subject: `New Message from ${name} via Website`,
      replyTo: email,
      react: ContactEmailTemplate({ name, email, phone, postcode, description }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return apiResponse(
        false,
        'There was a problem sending your message. Please try again later.',
        null,
        { code: 'EMAIL_SERVICE_FAILURE' },
        500
      );
    }

    return apiResponse(
      true,
      'Your message has been sent successfully!',
      { emailId: data.id },
      null,
      200
    );

  } catch (error) {
    console.error("Server-side Exception:", error);
    return apiResponse(
      false,
      'An unexpected error occurred. Our team has been notified.',
      null,
      { code: 'INTERNAL_SERVER_ERROR' },
      500
    );
  }
}
