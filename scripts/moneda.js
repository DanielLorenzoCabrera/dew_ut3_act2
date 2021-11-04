const partida = {
    monedaJugador : "",
    caraMonedaJugador: "",
    monedaOrdenador : "",
    caraMonedaOrdenador: "",
    victoriasJugador : 0,
    victoriasOrdenador : 0,
    partidasJugadas : 0,
    iteracionesAnimacion : 1
}




document.addEventListener("DOMContentLoaded" , ()=>{

    const startGameButton = document.getElementById("jugar");
    startGameButton.addEventListener("click", comenzarPartida);

    const tiposMonedas =  document.querySelectorAll(".tipo-moneda");
    tiposMonedas.forEach(moneda => moneda.addEventListener("click",elegirTipoMoneda));

});


function comenzarPartida(){
    if(partida.monedaJugador === "" || partida.caraMonedaJugador === ""){
        alert("Debes seleccionar un tipo de moneda y la cara que deseas jugar");
    } else{
        lanzarMoneda();
    }
}



function elegirTipoMoneda(){
    // Si hay uno seleccionado le quitamos la clase seleccionado
    const seleccionAnterior = document.querySelector('.seleccionada') ? (document.querySelector('.seleccionada')).classList.toggle("seleccionada") : '';
    this.classList.toggle("seleccionada"); // Le ponemos la clase al seleccionado
    partida.monedaJugador = this.dataset.tipomoneda;
    partida.monedaOrdenador = this.dataset.tipomoneda;
    mostrarCarasMoneda();

}

function mostrarCarasMoneda(){
    let seleccionCara =  document.querySelector(".seleccion-cara");
    let carasMoneda = seleccionCara.querySelectorAll("img");
    
    carasMoneda[0].src = `./../imagenes/${partida.monedaJugador}_cara.png`;
    carasMoneda[0].dataset.caraMonedaJugador = `cara`;
    carasMoneda[1].src = `./../imagenes/${partida.monedaJugador}_cruz.png`;
    carasMoneda[1].dataset.caraMonedaJugador = `cruz`;
    carasMoneda.forEach(moneda => moneda.addEventListener("click", elegirCaraMoneda));
}

function elegirCaraMoneda(){
    const seleccionAnterior = document.querySelector('.cara_seleccionada') ? (document.querySelector('.cara_seleccionada')).classList.toggle("cara_seleccionada") : '';
    this.classList.toggle("cara_seleccionada");
    if(this.dataset.caraMonedaJugador === "cara"){
        partida.caraMonedaJugador = "cara";
        partida.caraMonedaOrdenador = "cruz";
    }else{
        partida.caraMonedaJugador = "cruz";
        partida.caraMonedaOrdenador = "cara";
    }
    let monedaOrdenador =  document.querySelector("#imagenOrdenador");
    monedaOrdenador.src = `./../imagenes/${partida.monedaOrdenador}_${partida.caraMonedaOrdenador}.png`
}


function lanzarMoneda(){
    
    let animacionImg = document.querySelector("#animacion");
    let monedaJugador = `imagenes/${partida.monedaJugador}_${partida.caraMonedaJugador}.png`;
    let monedaOrdenador = `imagenes/${partida.monedaOrdenador}_${partida.caraMonedaOrdenador}.png`;
    let idAnimacion =  setInterval(animacionMoneda,300,animacionImg, monedaJugador, monedaOrdenador);
    setTimeout(pararAnimacion,2000,idAnimacion,animacionImg, monedaJugador);
   
    
 
}

function pararAnimacion(idAnimacion,animacionImg, monedaJugador){
    clearInterval(idAnimacion);
    darValorMoneda(animacionImg);
    actualizarPuntuacion(animacionImg, monedaJugador);
}


function animacionMoneda(animacionImg, monedaJugador, monedaOrdenador){
    partida.iteracionesAnimacion%2 === 0 ? animacionImg.src = monedaOrdenador : animacionImg.src = monedaJugador; 
    partida.iteracionesAnimacion++;
}

function actualizarPuntuacion(animacionImg,  monedaJugador){
    //animacionImg.src === monedaJugador ? partida.victoriasJugador++ : partida.victoriasOrdenador++;
    let puntosJugador =  document.querySelector("#puntosJugador");
    let puntosOrdenador =  document.querySelector("#puntosOrdenador");
    puntosJugador.innerHTML = partida.victoriasJugador;
    puntosOrdenador.innerHTML = partida.victoriasOrdenador;
}





function darValorMoneda(contenedorImagen){
    let numeroAleatorio =  Math.random();
    if(numeroAleatorio > 0.5){
        contenedorImagen.src = `imagenes/${partida.monedaJugador}_${partida.caraMonedaJugador}.png`;
        partida.victoriasJugador++ ;
    }else{
        contenedorImagen.src = `imagenes/${partida.monedaOrdenador}_${partida.caraMonedaOrdenador}.png`;
        partida.victoriasOrdenador++;
    }
    
}