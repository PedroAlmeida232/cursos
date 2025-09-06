function calcularDesconto(preco,desconto=10){
    precoDesconto = preco - (preco * (desconto/100))
    return precoDesconto
}

console.log(calcularDesconto(100,20))
console.log(calcularDesconto(100))