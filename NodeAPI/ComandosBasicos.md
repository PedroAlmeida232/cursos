# Fundamentos de Node.js e Criação de APIs

Este repositório contém um resumo dos fundamentos essenciais de Node.js, incluindo comandos básicos e a criação de APIs RESTful com Express.

## Índice

- [O que é Node.js?](#o-que-é-nodejs)
- [Instalação e Configuração](#instalação-e-configuração)
- [Comandos Básicos do Node.js e npm](#comandos-básicos-do-nodejs-e-npm)
- [Módulos e npm](#módulos-e-npm)
- [Criação de APIs com Express](#criação-de-apis-com-express)
- [Exemplos Práticos de API](#exemplos-práticos-de-api)

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

Você pode executar um arquivo JavaScript diretamente com o Node.js usando o comando `node`:

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
  const minhaFuncao = require('./meuModulo');
  ```

- **ES Modules (padrão em arquivos `.mjs` ou `.js` com `"type": "module"` no `package.json`):**
  ```javascript
  // Exportar
  export default minhaFuncao;
  export const outraFuncao = () => {};
  // Importar
  import minhaFuncao from './meuModulo.mjs';
  import { outraFuncao } from './meuModulo.mjs';
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

- **GET:** Usado para solicitar dados de um recurso especificado. (Ex: `app.get('/users', ...)`)
- **POST:** Usado para enviar dados a um recurso especificado. (Ex: `app.post('/users', ...)`)
- **PUT:** Usado para atualizar um recurso especificado. (Ex: `app.put('/users/:id', ...)`)
- **DELETE:** Usado para deletar um recurso especificado. (Ex: `app.delete('/users/:id', ...)`)

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
app.get("/admin", autenticar, (req, res) => {
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

## Exemplos Práticos de API

Vamos expandir o exemplo anterior para criar uma API RESTful simples para gerenciar uma lista de "itens".

### Estrutura do Projeto

Uma estrutura de projeto Node.js típica para uma API pode ser:

```
minha-api-restful/
├── node_modules/
├── package.json
├── app.js
└── routes/
    └── itens.js
```

- `app.js`: O arquivo principal que configura o servidor Express e importa as rotas.
- `routes/itens.js`: Contém as definições de rota para os recursos de "itens".

### `app.js` (Arquivo Principal)

```javascript
// app.js
const express = require("express");
const app = express();
const port = 3000;

// Importa as rotas de itens
const itensRoutes = require("./routes/itens");

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Usa as rotas de itens sob o prefixo /api/itens
app.use("/api/itens", itensRoutes);

// Rota de teste para a raiz
app.get("/", (req, res) => {
  res.send("API de Itens funcionando!");
});

// Middleware de tratamento de erros (opcional, mas recomendado)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erro interno do servidor!");
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `routes/itens.js` (Rotas para Itens)

Crie o diretório `routes` e o arquivo `itens.js` dentro dele:

```javascript
// routes/itens.js
const express = require("express");
const router = express.Router();

// Simula um banco de dados em memória
let itens = [
  { id: 1, nome: "Item A", quantidade: 10 },
  { id: 2, nome: "Item B", quantidade: 20 }
];

// GET /api/itens - Retorna todos os itens
router.get("/", (req, res) => {
  res.json(itens);
});

// GET /api/itens/:id - Retorna um item específico por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = itens.find(i => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item não encontrado");
  }
});

// POST /api/itens - Adiciona um novo item
router.post("/", (req, res) => {
  const novoItem = req.body;
  if (!novoItem.nome || !novoItem.quantidade) {
    return res.status(400).send("Nome e quantidade são obrigatórios");
  }
  novoItem.id = itens.length > 0 ? Math.max(...itens.map(i => i.id)) + 1 : 1;
  itens.push(novoItem);
  res.status(201).json(novoItem);
});

// PUT /api/itens/:id - Atualiza um item existente
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = itens.findIndex(i => i.id === id);
  if (itemIndex !== -1) {
    itens[itemIndex] = { ...itens[itemIndex], ...req.body, id: id };
    res.json(itens[itemIndex]);
  } else {
    res.status(404).send("Item não encontrado");
  }
});

// DELETE /api/itens/:id - Deleta um item
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = itens.length;
  itens = itens.filter(i => i.id !== id);
  if (itens.length < initialLength) {
    res.status(204).send(); // No Content
  } else {
    res.status(404).send("Item não encontrado");
  }
});

module.exports = router;
```


