import KoalaWelcomeEmail from '../../../components/email-template';
import { Resend } from 'resend';
import { FormValue } from '../../../schema/form';


const resend = new Resend(process.env.RESSEND_API_KEY);

export async function POST(request: Request): Promise<Response > {
  try {
    const body: FormValue = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Teste Desafio',
      react: KoalaWelcomeEmail({ userFirstname: body.name, userEmail: body.email, userMensagem: body.mensagem}) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, { status: 200});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}