Nome do Projeto: Scraping Diário Oficial

Descrição: Este projeto realiza a coleta (scraping) de informações do Diário Oficial da cidade de Jaboatão dos Guararapes para verificar a presença de um nome específico, fiz para ajudar minha namorada que passou num concurso e precisa ficar de olho em publicações de determinados dias. Os resultados são enviados por e-mail.

Tecnologias Utilizadas:

Node.js
Axios (para requisições HTTP)
Cheerio (para manipulação de HTML)
Nodemailer (para envio de e-mails)
dotenv (para gerenciar variáveis de ambiente)
Instalação:

Clone o repositório ou baixe os arquivos do projeto.
Navegue até o diretório do projeto.
Execute o seguinte comando para instalar as dependências:

npm install
Crie um arquivo .env na raiz do projeto e adicione suas configurações de e-mail:

EMAIL=seu-email@gmail.com
APP_PASSWORD=sua-senha-de-aplicativo
Execução: Para executar o script, use o seguinte comando em seu terminal:


node index.js
Funcionalidade:

O script irá buscar as páginas do Diário Oficial de Jaboatão dos Guararapes entre 1 de novembro de 2024 e 5 de dezembro de 2024.
Para cada dia, ele verifica se o nome "Bruna Thamires" está presente no texto da página.
Um e-mail é enviado informando se o nome foi encontrado ou não.
Observações:

Certifique-se de ter configurado a autenticação em duas etapas e gerado uma senha de aplicativo se estiver utilizando o Gmail.
Verifique se as URLs correspondem ao formato esperado. Se os números dos diários mudarem, ajuste a lógica conforme necessário.
Licença: Este projeto não possui uma licença específica. Use conforme necessário
