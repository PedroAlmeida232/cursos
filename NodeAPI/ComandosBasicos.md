# Fundamentos de Node.js, Express e MongoDB

Este repositório serve como um guia abrangente para os fundamentos de Node.js, a criação de APIs RESTful com Express.js e a integração com o banco de dados MongoDB, utilizando Mongoose para uma gestão de dados eficiente.

## Índice

- [O que é Node.js?](#o-que-é-nodejs)
- [Instalação e Configuração](#instalação-e-configuração)
- [Comandos Básicos do Node.js e npm](#comandos-básicos-do-nodejs-e-npm)
- [Módulos e npm](#módulos-e-npm)
- [Criação de APIs com Express](#criação-de-apis-com-express)
- [Integração com MongoDB e Mongoose](#integração-com-mongodb-e-mongoose)
- [Estrutura de Pastas Recomendada para Projetos Express/MongoDB](#estrutura-de-pastas-recomendada-para-projetos-expressmongodb)
- [Exemplos Práticos de API com MongoDB](#exemplos-práticos-de-api-com-mongodb)

## O que é Node.js?

Node.js é um ambiente de tempo de execução JavaScript de código aberto e multiplataforma que permite aos desenvolvedores executar código JavaScript no lado do servidor. Diferente do JavaScript que é executado em navegadores para interatividade no frontend, o Node.js estende o uso do JavaScript para construir aplicações de backend, ferramentas de linha de comando e muito mais.

### Principais Características:

- **Baseado no Motor V8 do Chrome:** Utiliza o mesmo motor JavaScript de alto desempenho do Google Chrome, o que o torna muito rápido.
- **Assíncrono e Orientado a Eventos:** A maioria das APIs do Node.js são assíncronas e não bloqueadoras. Isso significa que o Node.js pode lidar com muitas operações simultaneamente sem esperar que uma operação termine antes de iniciar a próxima, tornando-o eficiente para aplicações de E/S intensiva (como servidores web).
- **Single-threaded (Thread Única):** Embora seja single-threaded, ele usa um modelo de E/S não bloqueador, o que o torna escalável para um grande número de conexões simultâneas.
- **Ecossistema Rico (npm):** Possui o maior ecossistema de bibliotecas de código aberto do mundo, o npm (Node Package Manager), que facilita a adição de funcionalidades e a gestão de dependências.
- **Ideal para:** APIs RESTful, microsserviços, aplicações em tempo real (chats, jogos), ferramentas de linha de comando, e qualquer aplicação que exija alta performance e escalabilidade de E/S.

## Instalação e Configuração

Para começar a usar Node.js, você precisa instalá-lo em seu sistema. A instalação do Node.js geralmente inclui o npm (Node Package Manager).

### Verificando a Instalação

Após a instalação, você pode verificar se o Node.js e o npm estão instalados corretamente abrindo seu terminal ou prompt de comando e executando os seguintes comandos:

```bash
node -v
npm -v
```

Você deverá ver as versões instaladas do Node.js e do npm, respectivamente.

### Métodos de Instalação

Existem várias maneiras de instalar o Node.js, dependendo do seu sistema operacional:

- **Instalador Oficial:** A maneira mais simples para a maioria dos usuários é baixar o instalador diretamente do site oficial do Node.js ([nodejs.org](https://nodejs.org/)). Escolha a versão LTS (Long Term Support) para estabilidade.

- **Gerenciadores de Pacotes:**
  - **macOS (Homebrew):**
    ```bash
    brew install node
    ```
  - **Windows (Chocolatey):**
    ```bash
    choco install nodejs
    ```
  - **Linux (apt, yum, etc.):**
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```
    *Nota: Em algumas distribuições Linux, o `npm` pode precisar ser instalado separadamente.*

- **NVM (Node Version Manager):** Recomendado para desenvolvedores que precisam alternar entre diferentes versões do Node.js. O NVM permite instalar, gerenciar e alternar facilmente entre múltiplas versões do Node.js em uma única máquina.

  **Instalação do NVM (exemplo para Linux/macOS):**
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```
  *Após a instalação, reinicie seu terminal.*

  **Uso Básico do NVM:**
  ```bash
  nvm install node   # Instala a versão LTS mais recente
  nvm use node       # Usa a versão instalada
  nvm install 16     # Instala a versão 16.x
  nvm use 16         # Usa a versão 16.x
  nvm ls             # Lista as versões instaladas
  ```

## Comandos Básicos do Node.js e npm

### Executando Arquivos JavaScript

You can execute a JavaScript file directly with Node.js using the `node` command:

```bash
node meu_arquivo.js
```

**Exemplo:**

Crie um arquivo `app.js` com o seguinte conteúdo:

```javascript
// app.js
console.log("Olá do Node.js!");

const soma = (a, b) => a + b;
console.log(`2 + 3 = ${soma(2, 3)}`);
```

Execute-o no terminal:

```bash
node app.js
# Saída:
# Olá do Node.js!
# 2 + 3 = 5
```

### Modo Interativo (REPL)

O Node.js possui um ambiente de leitura-avaliação-impressão (REPL - Read-Eval-Print Loop) interativo, que é útil para testar pequenos trechos de código ou experimentar APIs.

Para entrar no REPL, digite `node` sem nenhum argumento no terminal:

```bash
node
> console.log("Hello REPL");
Hello REPL
undefined
> 1 + 1
2
> .exit
```

### Comandos Básicos do npm (Node Package Manager)

npm é o gerenciador de pacotes padrão para Node.js e é usado para instalar, gerenciar e publicar pacotes (bibliotecas) JavaScript.

- **`npm init`:** Inicializa um novo projeto Node.js, criando um arquivo `package.json`. Este arquivo armazena metadados do projeto e lista suas dependências.

  ```bash
  npm init
  # Siga as instruções no terminal para preencher as informações do projeto.
  # Você pode usar `npm init -y` para criar um package.json padrão rapidamente.
  ```

- **`npm install <nome_do_pacote>`:** Instala um pacote específico como dependência do seu projeto. O pacote será salvo na pasta `node_modules` e listado no `package.json`.

  ```bash
  npm install express
  # Ou para salvar como dependência de desenvolvimento (usado apenas durante o desenvolvimento):
  npm install nodemon --save-dev
  ```

- **`npm install`:** Se você clonar um projeto Node.js existente, este comando instalará todas as dependências listadas no `package.json`.

  ```bash
  npm install
  ```

- **`npm uninstall <nome_do_pacote>`:** Desinstala um pacote do seu projeto.

  ```bash
  npm uninstall express
  ```

- **`npm update`:** Atualiza todos os pacotes listados no `package.json` para suas versões mais recentes, respeitando as faixas de versão definidas.

  ```bash
  npm update
  ```

- **`npm start`:** Executa o script definido como `start` no `package.json`. É uma convenção comum para iniciar a aplicação principal.

  **Exemplo de `package.json`:**
  ```json
  {
    "name": "meu-app",
    "version": "1.0.0",
    "scripts": {
      "start": "node app.js",
      "dev": "nodemon app.js"
    },
    "dependencies": {
      "express": "^4.18.2"
    }
  }
  ```
  Para executar:
  ```bash
  npm start
  ```

- **`npm run <nome_do_script>`:** Executa um script personalizado definido na seção `scripts` do `package.json`.

  **Exemplo (usando o `package.json` acima):**
  ```bash
  npm run dev
  ```

- **`npm test`:** Executa os testes definidos no script `test` do `package.json`.

  ```bash
  npm test
  ```

- **`npm list` ou `npm ls`:** Lista os pacotes instalados no projeto.

  ```bash
  npm ls --depth=0 # Lista apenas as dependências diretas
  ```

- **`npm outdated`:** Verifica se há versões mais recentes dos pacotes instalados.

  ```bash
  npm outdated
  ```

## Módulos e npm

Em Node.js, módulos são blocos de código encapsulados que podem ser reutilizados em diferentes partes da sua aplicação ou em outras aplicações. Eles ajudam a organizar o código, evitar conflitos de nomes e facilitar a manutenção.

### Tipos de Módulos

1.  **Módulos Nativos (Built-in Modules):** São módulos que vêm pré-instalados com o Node.js e fornecem funcionalidades essenciais, como manipulação de arquivos (`fs`), operações de sistema operacional (`os`), e requisições HTTP (`http`).

    **Exemplo (Módulo `fs` para leitura de arquivos):**
    ```javascript
    const fs = require("fs");

    fs.readFile("exemplo.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return;
      }
      console.log("Conteúdo do arquivo:", data);
    });
    ```

2.  **Módulos Locais:** São módulos que você cria em seu próprio projeto para organizar seu código. Eles são exportados de um arquivo e importados em outro.

    **Exemplo:**

    *`matematica.js` (módulo de exportação):*
    ```javascript
    // matematica.js
    function somar(a, b) {
      return a + b;
    }

    function subtrair(a, b) {
      return a - b;
    }

    module.exports = {
      somar,
      subtrair
    };
    ```

    *`app.js` (módulo de importação):*
    ```javascript
    // app.js
    const operacoes = require("./matematica");

    console.log(operacoes.somar(10, 5));    // 15
    console.log(operacoes.subtrair(10, 5)); // 5
    ```

3.  **Módulos de Terceiros (Third-party Modules):** São módulos criados pela comunidade e disponibilizados através do npm. Eles são instalados via `npm install` e fornecem uma vasta gama de funcionalidades, como frameworks web (Express), bibliotecas de banco de dados (Mongoose), etc.

    **Exemplo (usando o módulo `lodash` para utilitários):**

    Primeiro, instale o `lodash`:
    ```bash
    npm install lodash
    ```

    Depois, use-o no seu código:
    ```javascript
    const _ = require("lodash");

    const numeros = [1, 2, 3, 4, 5];
    const soma = _.sum(numeros);
    console.log(soma); // 15

    const arrayUnico = _.uniq([1, 2, 2, 3, 1]);
    console.log(arrayUnico); // [1, 2, 3]
    ```

### CommonJS vs. ES Modules

Historicamente, Node.js usava o sistema de módulos **CommonJS** (com `require()` e `module.exports`). Com a evolução do JavaScript, os **ES Modules** (com `import` e `export`) se tornaram o padrão. Node.js agora suporta ambos.

- **CommonJS (padrão em arquivos `.js` sem `"type": "module"` no `package.json`):**
  ```javascript
  // Exportar
  module.exports = minhaFuncao;
  // Importar
  const minhaFuncao = require(\'./meuModulo\');
  ```

- **ES Modules (padrão em arquivos `.mjs` ou `.js` com `"type": "module"` no `package.json`):**
  ```javascript
  // Exportar
  export default minhaFuncao;
  export const outraFuncao = () => {};
  // Importar
  import minhaFuncao from \'./meuModulo.mjs\';
  import { outraFuncao } from \'./meuModulo.mjs\';
  ```

Para usar ES Modules em arquivos `.js` comuns, adicione `"type": "module"` ao seu `package.json`:

```json
{
  "name": "meu-projeto-es-modules",
  "version": "1.0.0",
  "type": "module", // Adicione esta linha
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

## Criação de APIs com Express

Express.js é um framework web minimalista e flexível para Node.js que fornece um conjunto robusto de recursos para desenvolver aplicações web e APIs. É o framework mais popular para Node.js.

### Instalação do Express

Primeiro, crie um novo diretório para o seu projeto, navegue até ele no terminal e inicialize um novo projeto Node.js:

```bash
mkdir minha-api-express
cd minha-api-express
npm init -y
```

Em seguida, instale o Express:

```bash
npm install express
```

### Criando sua Primeira API com Express

Crie um arquivo `app.js` (ou `index.js`) na raiz do seu projeto e adicione o seguinte código:

```javascript
// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Rota GET para a raiz da API
app.get("/", (req, res) => {
  res.send("Bem-vindo à minha primeira API Express!");
});

// Rota GET com parâmetro de URL
app.get("/saudar/:nome", (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}!`);
});

// Rota POST para receber dados
app.post("/dados", (req, res) => {
  const dadosRecebidos = req.body;
  console.log("Dados recebidos:", dadosRecebidos);
  res.json({ mensagem: "Dados recebidos com sucesso!", seusDados: dadosRecebidos });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

Para executar esta API, use o comando:

```bash
node app.js
```

Você verá a mensagem `Servidor rodando em http://localhost:3000` no seu terminal. Agora você pode testar a API usando um navegador ou uma ferramenta como Postman/Insomnia/cURL.

### Rotas (Routes)

Rotas definem como a aplicação responde a uma requisição de cliente para um endpoint específico, que é um URI (ou caminho) e um método de requisição HTTP específico (GET, POST, PUT, DELETE, etc.).

- **`app.METHOD(PATH, HANDLER)`**
  - `METHOD`: Um método de requisição HTTP em minúsculas (e.g., `get`, `post`, `put`, `delete`).
  - `PATH`: O caminho da rota no servidor.
  - `HANDLER`: A função callback que será executada quando a rota for correspondida. Esta função recebe os objetos `request` (req) e `response` (res).

**Exemplos de Métodos HTTP e Uso:**

- **GET:** Usado para solicitar dados de um recurso especificado. (Ex: `app.get(\'/users\', ...)`)
- **POST:** Usado para enviar dados a um recurso especificado. (Ex: `app.post(\'/users\', ...)`)
- **PUT:** Usado para atualizar um recurso especificado. (Ex: `app.put(\'/users/:id\', ...)`)
- **DELETE:** Usado para deletar um recurso especificado. (Ex: `app.delete(\'/users/:id\', ...)`)

### Middleware

Funções de middleware são funções que têm acesso ao objeto de requisição (`req`), ao objeto de resposta (`res`) e à próxima função de middleware no ciclo de requisição-resposta de um aplicativo. A próxima função de middleware é geralmente denotada por uma variável chamada `next`.

Middleware pode:
- Executar qualquer código.
- Fazer alterações nos objetos de requisição e resposta.
- Encerrar o ciclo de requisição-resposta.
- Chamar a próxima função de middleware na pilha.

**Exemplo de Middleware:**

```javascript
// Middleware de log simples
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next(); // Passa o controle para a próxima função de middleware/rota
});

// Middleware para autenticação (exemplo simplificado)
function autenticar(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === "minha-chave-secreta") {
    next(); // Autenticado, prossegue
  } else {
    res.status(401).send("Não autorizado");
  }
}

// Aplicando middleware a uma rota específica
app.get(\'/admin\', autenticar, (req, res) => {
  res.send("Bem-vindo à área de administração!");
});
```

### Tratamento de Erros

O Express permite definir middleware de tratamento de erros. Este middleware é definido com quatro argumentos: `(err, req, res, next)`.

**Exemplo:**

```javascript
// Middleware de tratamento de erros (deve ser o último app.use())
app.use((err, req, res, next) => {
  console.error(err.stack); // Loga o erro para depuração
  res.status(500).send("Algo deu errado!");
});
```

## Integração com MongoDB e Mongoose

MongoDB é um banco de dados NoSQL orientado a documentos, conhecido por sua flexibilidade e escalabilidade. Mongoose é uma biblioteca de modelagem de objetos (ODM - Object Data Modeling) para Node.js que facilita a interação com o MongoDB, fornecendo uma maneira baseada em esquema para modelar os dados da sua aplicação.

### Instalação do Mongoose

Primeiro, certifique-se de ter o MongoDB instalado e rodando em sua máquina ou utilize um serviço de nuvem como MongoDB Atlas. Em seguida, instale o Mongoose no seu projeto:

```bash
npm install mongoose
```

### Conectando ao MongoDB

Para conectar sua aplicação Node.js ao MongoDB usando Mongoose, você pode adicionar o seguinte código ao seu arquivo principal (`app.js` ou `server.js`):

```javascript
// db.js (ou no seu arquivo principal)
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/meubanco", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err.message);
    process.exit(1); // Sai do processo com falha
  }
};

module.exports = connectDB;
```

No seu `app.js`:

```javascript
// app.js
const express = require("express");
const connectDB = require("./config/db"); // Assumindo que você criou um arquivo db.js em config/

// Carregar variáveis de ambiente (se estiver usando dotenv)
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

// ... (restante da sua configuração Express)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

*Nota: É altamente recomendável usar variáveis de ambiente para armazenar a string de conexão do MongoDB (e outras informações sensíveis). Você pode usar a biblioteca `dotenv` para isso (`npm install dotenv`).*

### Definindo Schemas e Modelos com Mongoose

Um **Schema** no Mongoose define a estrutura do documento e os tipos de dados que ele pode conter. Um **Model** é uma classe que interage com a coleção do MongoDB, permitindo operações CRUD.

**Exemplo de Schema e Model para um `Item`:**

```javascript
// models/Item.js
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  descricao: {
    type: String,
    required: false,
  },
  quantidade: {
    type: Number,
    required: true,
    default: 0,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
```

## Estrutura de Pastas Recomendada para Projetos Express/MongoDB

Uma estrutura de pastas bem organizada é crucial para a manutenibilidade e escalabilidade de projetos Node.js e Express. A seguir, apresentamos uma estrutura comum e suas explicações:

```
meu-projeto-api/
├── node_modules/
├── .env
├── .gitignore
├── package.json
├── server.js (ou app.js)
├── config/
│   └── db.js
├── models/
│   └── Item.js
├── routes/
│   └── api/ (opcional, para versionamento ou agrupamento)
│       └── itens.js
├── controllers/
│   └── itemController.js
├── middleware/
│   └── authMiddleware.js
│   └── errorMiddleware.js
├── utils/
│   └── errorHandler.js
│   └── logger.js
└── tests/
    └── item.test.js
```

### Explicação da Estrutura de Pastas:

-   **`node_modules/`**: Contém todas as dependências do projeto instaladas via npm. Deve ser ignorado pelo controle de versão (`.gitignore`).
-   **`.env`**: Arquivo para armazenar variáveis de ambiente sensíveis (como strings de conexão de banco de dados, chaves de API, etc.). Não deve ser versionado.
-   **`.gitignore`**: Lista de arquivos e pastas que o Git deve ignorar (ex: `node_modules/`, `.env`).
-   **`package.json`**: Metadados do projeto, scripts e lista de dependências.
-   **`server.js` (ou `app.js`)**: O ponto de entrada principal da aplicação. Configura o servidor Express, conecta ao banco de dados e importa as rotas principais.
-   **`config/`**: Contém arquivos de configuração para o banco de dados, variáveis de ambiente, etc.
    -   **`db.js`**: Lógica de conexão com o MongoDB usando Mongoose.
-   **`models/`**: Define os schemas e modelos do Mongoose para as coleções do MongoDB.
    -   **`Item.js`**: Schema e modelo para a coleção de itens.
-   **`routes/`**: Define as rotas da API. Cada arquivo geralmente corresponde a um recurso (e.g., `itens.js` para rotas relacionadas a itens).
    -   **`api/` (opcional)**: Pode ser usado para organizar rotas por versão (`v1/`, `v2/`) ou por agrupamento lógico.
        -   **`itens.js`**: Define as rotas HTTP para operações CRUD em itens (e.g., GET /api/itens, POST /api/itens).
-   **`controllers/`**: Contém a lógica de negócios para cada rota. Os controllers recebem a requisição, interagem com os modelos e enviam a resposta.
    -   **`itemController.js`**: Funções que implementam a lógica para cada rota de item (e.g., `getAllItems`, `createItem`).
-   **`middleware/`**: Funções de middleware que podem ser aplicadas a rotas ou globalmente (autenticação, validação, log, tratamento de erros).
    -   **`authMiddleware.js`**: Lógica para autenticação de usuários (e.g., JWT).
    -   **`errorMiddleware.js`**: Middleware centralizado para tratamento de erros.
-   **`utils/`**: Utilitários e funções auxiliares que podem ser reutilizadas em várias partes da aplicação.
    -   **`errorHandler.js`**: Funções para padronizar o tratamento e formatação de erros.
    -   **`logger.js`**: Configuração de um logger para a aplicação.
-   **`tests/`**: Contém os testes unitários e de integração para a aplicação.
    -   **`item.test.js`**: Testes para as funcionalidades relacionadas a itens.

## Exemplos Práticos de API com MongoDB

Vamos refatorar o exemplo anterior de API de itens para usar a estrutura de pastas recomendada e integrar o MongoDB com Mongoose.

### 1. Configuração Inicial

Crie a estrutura de pastas e os arquivos conforme o diagrama acima. Instale as dependências:

```bash
mkdir meu-projeto-api
cd meu-projeto-api
npm init -y
npm install express mongoose dotenv
npm install nodemon --save-dev # Opcional, para desenvolvimento
```

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/meubancoapi
```

### 2. `config/db.js`

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err.message);
    process.exit(1); // Sai do processo com falha
  }
};

module.exports = connectDB;
```

### 3. `models/Item.js`

```javascript
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  descricao: {
    type: String,
    required: false,
  },
  quantidade: {
    type: Number,
    required: true,
    default: 0,
  },
  dataCriacao: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
```

### 4. `controllers/itemController.js`

```javascript
const Item = require("../models/Item");

// @desc    Obter todos os itens
// @route   GET /api/itens
// @access  Public
exports.getItems = async (req, res) => {
  try {
    const itens = await Item.find();
    res.status(200).json({ success: true, count: itens.length, data: itens });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Obter um único item
// @route   GET /api/itens/:id
// @access  Public
exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: "Item não encontrado" });
    }
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// @desc    Criar novo item
// @route   POST /api/itens
// @access  Public
exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({ success: true, data: newItem });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Atualizar item
// @route   PUT /api/itens/:id
// @access  Public
exports.updateItem = async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: "Item não encontrado" });
    }
    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Deletar item
// @route   DELETE /api/itens/:id
// @access  Public
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: "Item não encontrado" });
    }
    await item.deleteOne(); // Usar deleteOne() ou deleteMany() para remover documentos
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
```

### 5. `routes/api/itens.js`

```javascript
const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../../controllers/itemController");

const router = express.Router();

router.route("/").get(getItems).post(createItem);
router.route("/:id").get(getItem).put(updateItem).delete(deleteItem);

module.exports = router;
```

### 6. `server.js` (Arquivo Principal)

```javascript
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Carregar variáveis de ambiente
dotenv.config({ path: \'./.env\' });

// Conectar ao banco de dados
connectDB();

const app = express();

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Importar rotas
const itens = require("./routes/api/itens");

// Montar rotas
app.use("/api/itens", itens);

// Rota de teste para a raiz
app.get("/", (req, res) => {
  res.send("API de Itens com MongoDB funcionando!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em modo ${process.env.NODE_ENV || \'development\'} na porta ${PORT}`);
});
```

### Como Executar:

1.  Certifique-se de ter o MongoDB rodando.
2.  Navegue até a pasta `meu-projeto-api` no terminal.
3.  Execute `npm install` para instalar as dependências.
4.  Execute `node server.js` (ou `npm start` se você configurou o script `start` no `package.json` para `node server.js`).
    *   Para desenvolvimento, você pode usar `nodemon server.js` (se instalou `nodemon`) para reiniciar o servidor automaticamente a cada alteração.

Agora você tem uma API RESTful completa com Express e MongoDB, seguindo uma estrutura de pastas organizada e boas práticas.

---


