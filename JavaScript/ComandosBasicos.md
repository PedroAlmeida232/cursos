 # Fundamentos de JavaScript

Este repositório contém um resumo dos fundamentos essenciais de JavaScript, desde os conceitos básicos até a manipulação de objetos.

## Índice

- [Variáveis e Tipos de Dados](#variáveis-e-tipos-de-dados)
- [Operadores](#operadores)
- [Estruturas de Controle](#estruturas-de-controle)
- [Funções](#funções)
- [Arrays](#arrays)
- [Objetos](#objetos)

## Variáveis e Tipos de Dados

Em JavaScript, você pode declarar variáveis usando `var`, `let` ou `const`.

- `var`: Declara uma variável com escopo de função. Pode ser redeclarada e atualizada.
- `let`: Declara uma variável com escopo de bloco. Pode ser atualizada, mas não redeclarada no mesmo escopo.
- `const`: Declara uma constante com escopo de bloco. Não pode ser redeclarada nem atualizada após a atribuição inicial.

**Exemplos:**

```javascript
var nome = "João";
let idade = 30;
const PI = 3.14;

console.log(nome); // João
console.log(idade); // 30
console.log(PI); // 3.14

idade = 31; // 'let' pode ser atualizado
// PI = 3.14159; // Erro: 'const' não pode ser atualizado
```

### Tipos de Dados

JavaScript possui sete tipos de dados primitivos e um tipo de dado não primitivo (Objeto).

**Tipos Primitivos:**

- **String:** Representa texto (ex: `"Olá mundo"`).
- **Number:** Representa números inteiros e de ponto flutuante (ex: `10`, `3.14`).
- **Boolean:** Representa valores verdadeiros ou falsos (`true` ou `false`).
- **Undefined:** Representa uma variável que foi declarada, mas ainda não teve um valor atribuído.
- **Null:** Representa a ausência intencional de qualquer valor de objeto.
- **Symbol:** Um tipo de dado cujas instâncias são únicas e imutáveis.
- **BigInt:** Representa números inteiros com precisão arbitrária.

**Tipo Não Primitivo:**

- **Object:** Coleções de dados mais complexas (ex: `arrays`, `funções`, `objetos` literais).

**Exemplos de Tipos de Dados:**

```javascript
let texto = "JavaScript"; // String
let numero = 123; // Number
let isTrue = true; // Boolean
let indefinido; // Undefined
let nulo = null; // Null

console.log(typeof texto); // string
console.log(typeof numero); // number
console.log(typeof isTrue); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object (uma peculiaridade histórica do JS)
```

## Operadores

Operadores são símbolos que realizam operações em um ou mais operandos (valores).

### Tipos de Operadores

- **Operadores de Atribuição:** Usados para atribuir valores a variáveis.
  - `=` (atribuição simples)
  - `+=`, `-=`, `*=`, `/=`, `%=` (atribuição com operação)

  **Exemplo:**
  ```javascript
  let x = 10;
  x += 5; // x agora é 15
  ```

- **Operadores Aritméticos:** Usados para realizar cálculos matemáticos.
  - `+` (adição)
  - `-` (subtração)
  - `*` (multiplicação)
  - `/` (divisão)
  - `%` (módulo - resto da divisão)
  - `**` (exponenciação)
  - `++` (incremento)
  - `--` (decremento)

  **Exemplo:**
  ```javascript
  let a = 10;
  let b = 3;
  let soma = a + b; // 13
  let resto = a % b; // 1
  a++; // a agora é 11
  ```

- **Operadores de Comparação:** Usados para comparar dois valores e retornar um booleano (`true` ou `false`).
  - `==` (igual a - compara valor, não tipo)
  - `===` (estritamente igual a - compara valor e tipo)
  - `!=` (diferente de - compara valor, não tipo)
  - `!==` (estritamente diferente de - compara valor e tipo)
  - `>` (maior que)
  - `<` (menor que)
  - `>=` (maior ou igual a)
  - `<=` (menor ou igual a)

  **Exemplo:**
  ```javascript
  console.log(5 == "5");   // true
  console.log(5 === "5");  // false
  console.log(10 > 5);    // true
  ```

- **Operadores Lógicos:** Usados para combinar expressões booleanas.
  - `&&` (AND lógico)
  - `||` (OR lógico)
  - `!` (NOT lógico)

  **Exemplo:**
  ```javascript
  let idade = 20;
  let temCnh = true;
  console.log(idade > 18 && temCnh); // true
  console.log(!temCnh); // false
  ```

- **Operador Ternário (Condicional):** Uma forma concisa de escrever uma instrução `if-else`.
  - `condição ? valorSeVerdadeiro : valorSeFalso`

  **Exemplo:**
  ```javascript
  let status = (idade >= 18) ? "Adulto" : "Menor";
  console.log(status); // Adulto
  ```

## Estruturas de Controle

Estruturas de controle permitem que você execute blocos de código condicionalmente ou repetidamente.

### Condicionais

- **`if`, `else if`, `else`:** Executa um bloco de código se uma condição for verdadeira. Pode ter múltiplas condições (`else if`) e um bloco padrão (`else`).

  **Exemplo:**
  ```javascript
  let hora = 14;

  if (hora < 12) {
    console.log("Bom dia!");
  } else if (hora < 18) {
    console.log("Boa tarde!");
  } else {
    console.log("Boa noite!");
  }
  ```

- **`switch`:** Avalia uma expressão e executa o bloco de código associado ao caso correspondente. Útil para múltiplas condições baseadas em um único valor.

  **Exemplo:**
  ```javascript
  let dia = "segunda";

  switch (dia) {
    case "segunda":
      console.log("Dia de trabalho.");
      break;
    case "sábado":
    case "domingo":
      console.log("Fim de semana!");
      break;
    default:
      console.log("Dia inválido.");
  }
  ```

### Laços (Loops)

- **`for`:** Repete um bloco de código um número específico de vezes.

  **Exemplo:**
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  ```

- **`while`:** Repete um bloco de código enquanto uma condição for verdadeira.

  **Exemplo:**
  ```javascript
  let contador = 0;
  while (contador < 3) {
    console.log(contador);
    contador++;
  }
  // 0, 1, 2
  ```

- **`do...while`:** Similar ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição.

  **Exemplo:**
  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 0);
  // 0 (executa uma vez, mesmo que a condição seja falsa)
  ```

- **`for...in`:** Itera sobre as propriedades enumeráveis de um objeto.

  **Exemplo:**
  ```javascript
  const pessoa = { nome: "Ana", idade: 25 };
  for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  // nome: Ana
  // idade: 25
  ```

- **`for...of`:** Itera sobre valores de objetos iteráveis (como Arrays, Strings, Mapas, Sets).

  **Exemplo:**
  ```javascript
  const numeros = [1, 2, 3];
  for (let num of numeros) {
    console.log(num);
  }
  // 1
  // 2
  // 3
  ```

## Funções

Funções são blocos de código reutilizáveis que podem ser definidos e chamados para executar uma tarefa específica. Elas são fundamentais para organizar o código e torná-lo modular.

### Declaração de Função

Uma função é declarada usando a palavra-chave `function`, seguida pelo nome da função, uma lista de parâmetros entre parênteses e o corpo da função entre chaves.

**Exemplo:**
```javascript
function saudar(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudar("Mundo")); // Olá, Mundo!
```

### Expressão de Função

Funções também podem ser definidas como expressões, onde a função é atribuída a uma variável. Funções de expressão podem ser anônimas (sem nome).

**Exemplo:**
```javascript
const somar = function(a, b) {
  return a + b;
};

console.log(somar(5, 3)); // 8
```

### Arrow Functions (Funções de Seta)

Introduzidas no ES6, as arrow functions oferecem uma sintaxe mais concisa para escrever funções, especialmente para funções anônimas e callbacks. Elas também têm um comportamento diferente em relação ao `this`.

**Exemplo:**
```javascript
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 2)); // 8

const dizerOla = () => console.log("Olá!");
dizerOla(); // Olá!
```

### Parâmetros e Argumentos

- **Parâmetros:** Nomes listados na definição da função.
- **Argumentos:** Valores reais passados para a função quando ela é chamada.

**Exemplo:**
```javascript
function exibirInfo(nome, idade) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
exibirInfo("Carlos", 30); // Argumentos: "Carlos", 30
```

### Retorno de Funções

A palavra-chave `return` é usada para retornar um valor de uma função. Se `return` não for especificado, a função retorna `undefined` por padrão.

**Exemplo:**
```javascript
function getQuadrado(numero) {
  return numero * numero;
}

let resultado = getQuadrado(7);
console.log(resultado); // 49
```

### Escopo de Variáveis em Funções

Variáveis declaradas dentro de uma função têm escopo local, ou seja, só são acessíveis dentro dessa função. Variáveis declaradas fora de qualquer função têm escopo global.

**Exemplo:**
```javascript
let globalVar = "Sou global";

function minhaFuncao() {
  let localVar = "Sou local";
  console.log(globalVar);
  console.log(localVar);
}

minhaFuncao();
console.log(globalVar);
// console.log(localVar); // Erro: localVar não está definida fora da função
```

## Arrays

Arrays são objetos que permitem armazenar coleções ordenadas de valores. Os elementos de um array são acessados por um índice numérico, começando do zero.

### Criação de Arrays

Arrays podem ser criados de várias maneiras:

- **Literal de Array:** A forma mais comum e recomendada.

  **Exemplo:**
  ```javascript
  const frutas = ["Maçã", "Banana", "Laranja"];
  const numeros = [1, 2, 3, 4, 5];
  ```

- **Construtor `Array()`:** Menos comum, mas também possível.

  **Exemplo:**
  ```javascript
  const carros = new Array("Ford", "Fiat", "VW");
  const vazio = new Array(); // Array vazio
  ```

### Acessando Elementos

Use a notação de colchetes `[]` com o índice do elemento.

**Exemplo:**
```javascript
const cores = ["Vermelho", "Verde", "Azul"];
console.log(cores[0]); // Vermelho
console.log(cores[2]); // Azul
```

### Modificando Elementos

Elementos de um array podem ser modificados atribuindo um novo valor a um índice específico.

**Exemplo:**
```javascript
const pontos = [10, 20, 30];
pontos[1] = 25; // Modifica o segundo elemento
console.log(pontos); // [10, 25, 30]
```

### Propriedades e Métodos Comuns de Arrays

- **`length`:** Retorna o número de elementos no array.

  **Exemplo:**
  ```javascript
  const lista = ["a", "b", "c"];
  console.log(lista.length); // 3
  ```

- **`push()`:** Adiciona um ou mais elementos ao final do array e retorna o novo comprimento.

  **Exemplo:**
  ```javascript
  const animais = ["cachorro", "gato"];
  animais.push("pássaro");
  console.log(animais); // ["cachorro", "gato", "pássaro"]
  ```

- **`pop()`:** Remove o último elemento de um array e retorna esse elemento.

  **Exemplo:**
  ```javascript
  const cidades = ["São Paulo", "Rio", "Belo Horizonte"];
  const ultimaCidade = cidades.pop();
  console.log(ultimaCidade); // Belo Horizonte
  console.log(cidades); // ["São Paulo", "Rio"]
  ```

- **`unshift()`:** Adiciona um ou mais elementos ao início do array e retorna o novo comprimento.

  **Exemplo:**
  ```javascript
  const letras = ["b", "c"];
  letras.unshift("a");
  console.log(letras); // ["a", "b", "c"]
  ```

- **`shift()`:** Remove o primeiro elemento de um array e retorna esse elemento.

  **Exemplo:**
  ```javascript
  const numerosShift = [1, 2, 3];
  const primeiroNumero = numerosShift.shift();
  console.log(firstNumber); // 1
  console.log(numerosShift); // [2, 3]
  ```

- **`indexOf()`:** Retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente.

  **Exemplo:**
  ```javascript
  const elementos = ["água", "fogo", "terra"];
  console.log(elementos.indexOf("fogo")); // 1
  console.log(elementos.indexOf("ar")); // -1
  ```

- **`forEach()`:** Executa uma função fornecida uma vez para cada elemento do array.

  **Exemplo:**
  ```javascript
  const nomes = ["Alice", "Bob", "Charlie"];
  nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
  });
  // Olá, Alice!
  // Olá, Bob!
  // Olá, Charlie!
  ```

- **`map()`:** Cria um novo array com os resultados da chamada de uma função para cada elemento do array.

  **Exemplo:**
  ```javascript
  const numerosMap = [1, 2, 3];
  const dobrados = numerosMap.map(num => num * 2);
  console.log(dobrados); // [2, 4, 6]
  ```

- **`filter()`:** Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

  **Exemplo:**
  ```javascript
  const idades = [12, 18, 25, 8];
  const maioresDeIdade = idades.filter(idade => idade >= 18);
  console.log(maioresDeIdade); // [18, 25]
  ```

- **`find()`:** Retorna o valor do primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, retorna `undefined`.

  **Exemplo:**
  ```javascript
  const produtos = [
    { id: 1, nome: "Teclado" },
    { id: 2, nome: "Mouse" }
  ];
  const mouse = produtos.find(p => p.nome === "Mouse");
  console.log(mouse); // { id: 2, nome: "Mouse" }
  ```

- **`reduce()`:** Executa uma função redutora (fornecida por você) em cada elemento do array, resultando em um único valor de saída.

  **Exemplo:**
  ```javascript
  const numerosReduce = [1, 2, 3, 4];
  const somaTotal = numerosReduce.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  console.log(somaTotal); // 10
  ```

## Objetos

Objetos em JavaScript são coleções de pares chave-valor. Eles são usados para armazenar dados complexos e entidades do mundo real. As chaves (ou nomes de propriedades) são strings (ou Symbols) e os valores podem ser de qualquer tipo de dado, incluindo outros objetos ou funções.

### Criação de Objetos

Objetos podem ser criados usando literais de objeto ou o construtor `Object()`.

- **Literal de Objeto (mais comum):**

  **Exemplo:**
  ```javascript
  const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "Lisboa",
    saudar: function() {
      console.log(`Olá, meu nome é ${this.nome}.`);
    }
  };
  ```

- **Construtor `Object()`:**

  **Exemplo:**
  ```javascript
  const carro = new Object();
  carro.marca = "Toyota";
  carro.modelo = "Corolla";
  carro.ano = 2020;
  ```

### Acessando Propriedades

Você pode acessar as propriedades de um objeto usando a notação de ponto (`.`) ou a notação de colchetes (`[]`).

- **Notação de Ponto:** Útil quando o nome da propriedade é conhecido e é um identificador válido.

  **Exemplo:**
  ```javascript
  console.log(pessoa.nome);   // Maria
  console.log(pessoa.idade);  // 30
  ```

- **Notação de Colchetes:** Útil quando o nome da propriedade é dinâmico (armazenado em uma variável) ou contém caracteres especiais (espaços, hífens).

  **Exemplo:**
  ```javascript
  let chave = "cidade";
  console.log(pessoa[chave]);      // Lisboa
  console.log(pessoa["idade"]);    // 30
  ```

### Modificando e Adicionando Propriedades

Propriedades de objetos podem ser modificadas ou novas propriedades podem ser adicionadas simplesmente atribuindo um valor a elas.

**Exemplo:**
```javascript
pessoa.idade = 31; // Modifica a propriedade existente
pessoa.profissao = "Engenheira"; // Adiciona uma nova propriedade

console.log(pessoa.idade);      // 31
console.log(pessoa.profissao);  // Engenheira
```

### Removendo Propriedades

Use o operador `delete` para remover uma propriedade de um objeto.

**Exemplo:**
```javascript
delete pessoa.cidade;
console.log(pessoa.cidade); // undefined
```

### Métodos de Objeto

Funções armazenadas como propriedades de um objeto são chamadas de métodos. Eles podem acessar outras propriedades do mesmo objeto usando a palavra-chave `this`.

**Exemplo:**
```javascript
pessoa.saudar(); // Olá, meu nome é Maria.
```

### Iterando sobre Propriedades de Objeto

Você pode iterar sobre as chaves ou valores de um objeto usando `for...in` ou métodos como `Object.keys()`, `Object.values()`, `Object.entries()`.

- **`for...in` (já visto em Estruturas de Controle):**

  **Exemplo:**
  ```javascript
  for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
  }
  ```

- **`Object.keys()`:** Retorna um array com os nomes das propriedades enumeráveis de um objeto.

  **Exemplo:**
  ```javascript
  const chaves = Object.keys(pessoa);
  console.log(chaves); // ["nome", "idade", "saudar", "profissao"]
  ```

- **`Object.values()`:** Retorna um array com os valores das propriedades enumeráveis de um objeto.

  **Exemplo:**
  ```javascript
  const valores = Object.values(pessoa);
  console.log(valores); // ["Maria", 31, f saudar(), "Engenheira"]
  ```

- **`Object.entries()`:** Retorna um array de arrays, onde cada array interno contém um par [chave, valor] de uma propriedade enumerável do objeto.

  **Exemplo:**
  ```javascript
  const entradas = Object.entries(pessoa);
  console.log(entradas);
  /*
  [
    ["nome", "Maria"],
    ["idade", 31],
    ["saudar", f saudar()],
    ["profissao", "Engenheira"]
  ]
  */
  ```



