const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

console.log(Object.keys(relatorio));
console.log(Object.values(relatorio));
const entradas = Object.entries(relatorio);
console.log(entradas);


for (const [chave, valor] of entradas){
    if (valor>50){
        console.log( chave +": Alerta ");
    }
    else{
        console.log( chave +": Normal");
    }

}