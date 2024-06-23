<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>🚗 CRUD de Carros com Express e MySQL 🚀</h1>
    <p>Este projeto é um exemplo de um CRUD (Create, Read, Update, Delete) de carros desenvolvido utilizando Node.js com Express e a biblioteca <code>mysql2</code> para conexão com um banco de dados MySQL. O objetivo deste projeto é treinar o desenvolvimento de uma API RESTful com operações básicas de CRUD, bem como a integração com um banco de dados SQL.</p>
    <h2>📋 Sumário</h2>
    <ul>
        <li><a href="#descrição">📜 Descrição</a></li>
        <li><a href="#instalação">🔧 Instalação</a></li>
        <li><a href="#configuração">⚙️ Configuração</a></li>
        <li><a href="#uso">💡 Uso</a></li>
        <li><a href="#endpoints-da-api">🔗 Endpoints da API</a></li>
        <li><a href="#estrutura-do-projeto">🗂️ Estrutura do Projeto</a></li>
        <li><a href="#dependências">📦 Dependências</a></li>
        <li><a href="#contribuição">👥 Contribuição</a></li>
        <li><a href="#licença">📄 Licença</a></li>
    </ul>
    <h2 id="descrição">📜 Descrição</h2>
    <p>Este projeto implementa uma API para gerenciar uma lista de carros, permitindo as operações de criação, leitura, atualização e exclusão de registros de carros armazenados em um banco de dados MySQL. O projeto segue uma arquitetura modularizada com camadas de serviço, DAO (Data Access Object) e rotas.</p>
    <h2 id="instalação">🔧 Instalação</h2>
    <ol>
        <li><strong>Clone o repositório:</strong>
            <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio</code></pre>
        </li>
        <li><strong>Instale as dependências:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Configure o banco de dados MySQL:</strong>
            <p>Crie um banco de dados MySQL com o nome especificado no arquivo <code>.env</code> e configure suas credenciais de acesso.</p>
        </li>
        <li><strong>Configure as variáveis de ambiente:</strong>
            <p>Crie um arquivo <code>.env</code> na raiz do projeto e configure as variáveis conforme o exemplo abaixo:</p>
            <pre><code>PORT=porta-da-sua-preferencia
DB_USER=seu-usuario
DB_NAME=nome-do-seu-banco-dados
DB_PASSWORD=sua-senha
DB_HOST=host-de-sua-preferencia-do-seu-banco-de-dados
            </code></pre>
        </li>
    </ol>
    <h2 id="configuração">⚙️ Configuração</h2>
    <h3>🛠️ Banco de Dados</h3>
    <p>Execute o seguinte comando SQL para criar a tabela <code>Cars</code> no seu banco de dados MySQL:</p>
    <pre><code>CREATE TABLE Cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    plate VARCHAR(50) NOT NULL,
    automaker VARCHAR(255) NOT NULL
);
    </code></pre>
    <h3>🚀 Executar o Servidor</h3>
    <p>Para iniciar o servidor, utilize o comando:</p>
    <pre><code>npm start</code></pre>
    <p>O servidor estará rodando em <code>http://localhost:7777</code>.</p>
    <h2 id="uso">💡 Uso</h2>
    <h3 id="endpoints-da-api">🔗 Endpoints da API</h3>
    <h4>Criar um carro</h4>
    <p><strong>POST</strong> <code>/create</code> 🚘</p>
    <p><strong>Corpo da Requisição (JSON):</strong></p>
    <pre><code>{
  "model": "Modelo do Carro",
  "plate": "Placa do Carro",
  "automaker": "Fabricante do Carro"
}
    </code></pre>
    <p><strong>Resposta (JSON):</strong></p>
    <pre><code>{
  "message": "Carro criado com sucesso",
  "car": {
    "id": 1,
    "model": "Modelo do Carro",
    "plate": "Placa do Carro",
    "automaker": "Fabricante do Carro"
  }
}
    </code></pre>
    <h4>Listar todos os carros</h4>
    <p><strong>GET</strong> <code>/show-all</code> 🚗🚙</p>
    <p><strong>Resposta (JSON):</strong></p>
    <pre><code>{
  "message": "Consulta realizada com sucesso",
  "cars": [
    {
      "id": 1,
      "model": "Modelo do Carro",
      "plate": "Placa do Carro",
      "automaker": "Fabricante do Carro"
    },
    ...
  ]
}
    </code></pre>
    <h4>Obter detalhes de um carro</h4>
    <p><strong>GET</strong> <code>/show/:id</code> 🕵️‍♂️</p>
    <p><strong>Resposta (JSON):</strong></p>
    <pre><code>{
  "message": "Consulta realizada com sucesso",
  "car": {
    "id": 1,
    "model": "Modelo do Carro",
    "plate": "Placa do Carro",
    "automaker": "Fabricante do Carro"
  }
}
    </code></pre>
    <h4>Atualizar um carro</h4>
    <p><strong>PUT</strong> <code>/update/:id</code> 🔄</p>
    <p><strong>Corpo da Requisição (JSON):</strong></p>
    <pre><code>{
  "model": "Novo Modelo",
  "plate": "Nova Placa",
  "automaker": "Novo Fabricante"
}
    </code></pre>
    <p><strong>Resposta (JSON):</strong></p>
    <pre><code>{
  "message": "Carro atualizado com sucesso",
  "car": {
    "id": 1,
    "model": "Novo Modelo",
    "plate": "Nova Placa",
    "automaker": "Novo Fabricante"
  }
}
    </code></pre>
    <h4>Deletar um carro</h4>
    <p><strong>DELETE</strong> <code>/delete/:id</code> 🗑️</p>
    <p><strong>Resposta (JSON):</strong></p>
    <pre><code>{
  "message": "Carro deletado com sucesso"
}
    </code></pre>
    <h2 id="estrutura-do-projeto">🗂️ Estrutura do Projeto</h2>
    <p>A estrutura do projeto é organizada da seguinte forma:</p>
    <pre><code>.
├── data/
│   ├── connection.js      # Configuração da conexão com o banco de dados
│
├── dao/
│   ├── carDao.js          # Acesso aos dados (DAO) para a entidade Car
│
├── services/
│   ├── carService.js      # Camada de serviço para a lógica de negócios dos carros
│
├── controller/
│   ├── carController.js   # Controladores de rota para as operações de carro
│
├── routes/
│   ├── carRoutes.js       # Definição das rotas de carro
│
├── .env                   # Arquivo de configuração das variáveis de ambiente
├── package.json           # Gerenciamento de dependências e scripts
└── server.js              # Configuração e inicialização do servidor Express
    </code></pre>
    <h2 id="dependências">📦 Dependências</h2>
    <ul>
        <li><a href="https://expressjs.com/" target="_blank">Express</a> - Framework web para Node.js.</li>
        <li><a href="https://www.npmjs.com/package/mysql2" target="_blank">mysql2</a> - Biblioteca para integração com MySQL.</li>
        <li><a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a> - Carrega variáveis de ambiente a partir de um arquivo <code>.env</code>.</li>
        <li><a href="https://www.npmjs.com/package/express" target="_blank">express</a> - Cria toda a  estrutura de API e suas rotas necessárias <code>express</code>.</li>
        <li><a href="https://www.npmjs.com/package/express-validator" target="_blank">express validator</a> - Com express validator cria-se toda uma validação segura para os dados <code>express validator</code>.</li>
    </ul>
    <h2 id="contribuição">👥 Contribuição</h2>
    <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.</p>
    <h2 id="licença">📄 Licença</h2>
    <p>Este projeto está licenciado sob a licença MIT - veja o arquivo <code>LICENSE</code> para mais detalhes.</p>
</body>
</html>
