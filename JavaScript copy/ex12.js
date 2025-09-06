function CalcularFrete(distancia){
    if (distancia <= 5){
        return "R$ 5,00"
    }else if (distancia <= 20 && distancia > 5){
        return (`R$ ${5 + (distancia * 0.50)}`)
    }else{
        return ("R$ 20,00")
    }

}

console.log(CalcularFrete(22))


const lista = [0 , 1 , 2 ]
console.log(lista[4]=100)
console.log(lista[3])