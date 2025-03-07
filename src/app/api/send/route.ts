import { EmailTemplate } from '@/components/UI/templates/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resendAPI = process.env.RESEND_API_KEY as string;

const resend = new Resend(resendAPI);

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL as string; 

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      );
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Formulario de Contacto <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      subject: `Nuevo mensaje de contacto de ${name}`,
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });
    
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, data }, { status: 200 });
    
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
    console.error(errorMsg);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}