const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];
const participantesLiberados = participantes.filter((participante) => (participante.idade >= 18))
for(let i = 0; i < participantesLiberados.length; i++){
    console.log(`Acesso liberado para: ${participantesLiberados[i].nome}  `)
}
const aprovados = participantesLiberados.map(p=>p.nome)

console.log(`Lista de aprovados: ${aprovados}`)


const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

console.log("Relatorio de produtos vendidos:")
for(let i = 0; i < produtos.length; i++){
  console.log(i)
}