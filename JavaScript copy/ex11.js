const ParImpar = (numero) => {
    if (numero % 2 == 0){
        return `${numero} e par`
    }else{
        return `${numero} e impar`
    }
}

console.log(ParImpar(4))
console.log(ParImpar(19))