import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface MailAttachment {
  filename: string;
  content: Buffer;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: MailAttachment[];
}

export async function POST(req: Request) {
  try {
    // Captura os dados enviados via FormData do navegador
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Configuração do transportador do Nodemailer 
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', //host SMTP
      port: 465, 
      secure: true, 
      auth: {
        user: 'calderarogustavo@gmail.com', // e-mail de envio
        pass: 'rgdx lqhj yaro dhgn', 
      },
    });

    // Estrutura base de opções do e-mail
    const mailOptions: MailOptions = {
      from: '"Formulário de Contato" <calderarogustavo@gmail.com>',
      to: 'calderarogustavo@gmail.com',
      subject: `Interesse em Oportunidades da Quality - ${name}`,
      html: `
        <h3>Novo contato pelo formulário Trabalhe Conosco</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail do Candidato:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Área de Atuação:</strong> ${position}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
      attachments: [],
    };

    // Se o usuário anexou um arquivo, processa ele para o Nodemailer
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

        if (!mailOptions.attachments) {
            mailOptions.attachments = [];
        }

      mailOptions.attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Dispara o e-mail via servidor local
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
     const errorMessage = error instanceof Error ? error.message : 'Erro interno desconhecido';
    console.error('Erro na rota de e-mail:', error);
    return NextResponse.json(
      { success: false, error: errorMessage || 'Erro interno do servidor' },
      { status: 500 }
    );
}
}

