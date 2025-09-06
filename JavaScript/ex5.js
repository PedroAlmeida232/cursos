const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
for (let i = 0; i < entradas.length; i++) {
    if (entradas[i] === "fim"){
        console.log("Fim do processamento.");
        break;
    }
    else{
        console.log(entradas[i]);
    }
}
