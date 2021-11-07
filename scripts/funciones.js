document.addEventListener("DOMContentLoaded", recuperarBotones);



function recuperarBotones(){
    let botonFactorial=  document.querySelector("#botonFactorial");
    botonFactorial.addEventListener("click", comprobarInput);

    let intercambioValor = document.getElementById("intercambioValor");
    intercambioValor.addEventListener("click", intercambiarPorValor);

    let intercambioReferencia= document.getElementById("intercambioReferencia");
    intercambioReferencia.addEventListener("click", intercambiarPorReferencia);

}



function comprobarInput(){
    let numeroEntrada =  document.querySelector("#input-factorial");
    let valor = parseInt(numeroEntrada.value);
    numeroEntrada.value = valor; // Devolvemos el número redondeado, ya que tiene que ser entero
    if(isNaN(valor)|| valor < 0 || !Number.isInteger(valor)){
        alert("Por favor introduce un número entero positivo");
    }else{
        calcularFactorial(valor)
    }
}


function calcularFactorial(valor){
   let resultadoFactorial =  document.getElementById("resultado-factorial");
   if(valor === 0) {
       resultadoFactorial.value = 1; return;
   }
   let acumulador = 1;
   for(let i = 1; i <= valor; i++){
        acumulador *= i;
   }
   resultadoFactorial.value = acumulador;
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