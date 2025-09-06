const despesas = [120, 80, 45.5, 200, 60];
somador = 0;
for(let i = 0; i < despesas.length ;i++){
    somador += despesas[i];
    
}
console.log(`Total de despesas: R$${somador}  `);