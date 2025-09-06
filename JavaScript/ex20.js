const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 95 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 85  }
];

console.log("Relatório de Vendas:")
console.log("")

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  console.log(`Nome: ${produto.nome} | Preço: R$${produto.preco} | Quantidade Vendida: ${produto.quantidadeVendida}`);

}

console.log("")
console.log("Produtos com alto volume de vendas(> 100 unidades):")

if (produtos.quantidadeVendida > 100) { 
    produtosMaisVendidos += `${produtos.nome}` 
  }
console.log(produtosMaisVendidos)  

console.log("Total de vendas por produto:")

for (let i = 0; i < produtos.length; i++) {
    totalVendas = produtos[i].preco * produtos[i].quantidadeVendida
    console.log(`${produtos[i].nome}: R$${totalVendas}`)
}

console.log("")
console.log("Produto mais lucrativo:")

