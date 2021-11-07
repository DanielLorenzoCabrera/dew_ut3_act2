document.addEventListener("DOMContentLoaded", recuperarBotones);



function recuperarBotones(){
    let botonFactorial=  document.querySelector("#botonFactorial");
    botonFactorial.addEventListener("click", comprobarInput);

    let botonFactorialRecursivo =  document.querySelector("#botonFactorialRecursivo");
    botonFactorialRecursivo.addEventListener("click", comprobarInput);

    let intercambioValor = document.getElementById("intercambioValor");
    intercambioValor.addEventListener("click", intercambiarPorValor);

    let intercambioReferencia= document.getElementById("intercambioReferencia");
    intercambioReferencia.addEventListener("click", intercambiarPorReferencia);

    let botonSumarArgumentos =  document.getElementById("sumarArgumentos");
    botonSumarArgumentos.addEventListener("click", sumarArgumentos);

    let botonesInformacion = document.querySelectorAll(".informacion");
    botonesInformacion.forEach(boton => {boton.addEventListener("click", mostrarInformacion)})
}



function comprobarInput(){
    let numeroEntrada =  document.querySelector("#input-factorial");
    let valor = parseInt(numeroEntrada.value);
    numeroEntrada.value = valor; // Devolvemos el número redondeado, ya que tiene que ser entero
    if(isNaN(valor)|| valor < 0 || !Number.isInteger(valor)){
        alert("Por favor introduce un número entero positivo");
    }else{
        let resultado = this.id === "botonFactorial" ? calcularFactorial(valor) : calcularFactorialRecursivo(valor);
        let resultadoFactorial =  document.getElementById("resultado-factorial");
        resultadoFactorial.value = resultado;
    }
}


function calcularFactorial(valor){
   
   if(valor === 0) return 1;
   let acumulador = 1;
   for(let i = 1; i <= valor; i++){
        acumulador *= i;
   }
   return acumulador;
}


function intercambiarPorValor(){
    // Por valor se pasa una copia del valor de la variable
    let parametroUno =  document.getElementById("parametro1");
    let parametroDos =  document.getElementById("parametro2");
    
    let [valorParametroUno, valorParametroDos] = [parametroUno.value, parametroDos.value];
    if(isNaN(parseInt(valorParametroUno)) || isNaN(parseInt(valorParametroDos))){
        alert("Debes de introducir dos números válidos");
        return;
    }
    parametroUno.value = valorParametroDos;
    parametroDos.value = valorParametroUno;

}


function intercambiarPorReferencia(){
    // Por referencia es necesario que sea un objeto
    let parametroUno =  document.getElementById("parametro1");
    let parametroDos =  document.getElementById("parametro2");
    let valorParametroUno = [parametroUno.value];
    let valorParametroDos = [parametroDos.value];
    parametroUno.value = valorParametroDos;
    parametroDos.value = valorParametroUno;

}



function sumarArgumentos(){
    let variables =  ((document.getElementById("variables")).value).split(",");
    let resultadoSuma =  document.getElementById("resultadoSuma");
    let valoresCorrectos = true;
    variables.forEach(posicion => { 
        parseFloat(posicion);
        if(isNaN(posicion)){ 
            valoresCorrectos = false;
        }
    });
    
    if(!valoresCorrectos){
        alert("Debes introducir valores numéricos separados por comas");
        return;
    }
    let total = 0;
    variables.forEach(posicion =>{
        total += parseFloat(posicion)
    })

    resultadoSuma.value = total;

}

function mostrarInformacion(){
    let datos = (this.dataset.datos).split(",");
    let displayInformacion =  document.getElementById("informacion");
    let resultado = "";
    datos.forEach(dato =>{
        resultado = resultado.concat(" ",dato);
    })
    console.log(resultado)
    resultado = resultado.concat(" ", "Las Palmas de G.C 100");
    displayInformacion.value =  resultado;



}


function calcularFactorialRecursivo(valor){
     return valor < 2 ? 1 : valor * calcularFactorialRecursivo(valor - 1) ;
     
}