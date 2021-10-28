const partida = {
    monedaJugador : "",
    monedaOrdenador : "",
    victoriasJugador : 0,
    victoriasOrdenador : 0,
    partidasJugadas : 0
}

const monedas = {
    moneda1 : {
        cara : "src...",
        cruz : "src..."
    },
    moneda2 : {
        cara : "src...",
        cruz : "src..."
    },
    moneda3 : {
        cara : "src...",
        cruz : "src..."
    }
}





document.addEventListener("DOMContentLoaded" , ()=>{

    const startGameButton = document.getElementById("jugar");
    startGameButton.addEventListener("click", comenzarPartida);

    const tiposMonedas =  document.querySelectorAll(".tipo-moneda");
    tiposMonedas.forEach(moneda => moneda.addEventListener("click",elegirTipoMoneda));

});


function comenzarPartida(){
    haElegidoMoneda();
}


function haElegidoMoneda(){
    const seleccionUsuario =  document.querySelector(".seleccionada") ? true : false;
    return seleccionUsuario;
}


function elegirTipoMoneda(){
    const seleccionAnterior = document.querySelector('.seleccionada') ? (document.querySelector('.seleccionada')).classList.toggle("seleccionada") : '';
    this.classList.toggle("seleccionada");
}