require('dotenv').config(); // Carrega as variáveis do .env
const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

// Função para buscar a página
async function fetchPage(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error('Erro ao buscar a página:', error);
    }
}

// Função para enviar e-mail
async function sendEmail(date, found) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Usa a variável de ambiente
            pass: process.env.APP_PASSWORD // Usa a variável de ambiente
        }
    });

    const message = found 
        ? `O nome "o nome do dito cujo" foi encontrado.`
        : `Não foi encontrado o nome "o nome do dito cujo" no dia ${date}.`;

    const mailOptions = {
        from: process.env.EMAIL,
        to: 'coloqueoemailaqui@gmail.com',
        subject: `Resultado da busca - ${date}`,
        text: message
    };

    await transporter.sendMail(mailOptions);
    console.log('Email enviado!');
}

// Função principal que realiza o scraping
(async () => {
    // URL fixa para scraping
    const url = 'https://diariooficial.jaboatao.pe.gov.br/2024/12/05/05-de-dezembro-de-2024-xxxiii-no-226-jaboatao-dos-guararapes/';
    const dateToFetch = '05-12-2024'; // Data no formato que será usada no email

    const pageContent = await fetchPage(url);

    if (!pageContent) {
        console.log(`Não foi possível acessar a página: ${url}`);
        return; // Retorna se a página não for acessada
    }

    const $ = cheerio.load(pageContent);
    const texto = $('body').text(); // Pega todo o texto da página

    const found = texto.includes("Nome do dito cujo"); // Verifica se está presente

    await sendEmail(dateToFetch, found);
})();