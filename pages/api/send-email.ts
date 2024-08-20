import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_TO,
                subject: `Nova mensagem de contato de ${name}`,
                text: `Você recebeu uma nova mensagem de contato.\n\nNome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
                html: `<p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Mensagem:</strong> ${message}</p>`,
            });

            res.status(200).json({ message: 'E-mail enviado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}