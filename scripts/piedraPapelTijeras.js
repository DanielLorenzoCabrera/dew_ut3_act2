
const partida = {
    manoJugador : "",
    manoOrdenador: "",
    manos : ["piedra","papel", "tijeras"],
    victoriasJugador : 0,
    victoriasOrdenador : 0,
    partidasJugadas : 0
    
}


document.addEventListener("DOMContentLoaded", ()=>{

    let contenerdorManos = document.querySelector(".manos");
    let manos = contenerdorManos.querySelectorAll("img");
    manos.forEach(mano => mano.addEventListener("click", seleccionarMano));

    let comenzarJuego =  document.querySelector("#comenzarJuego");
    comenzarJuego.addEventListener("click", comenzarPartida);

});


function seleccionarMano(){
    partida.manoJugador = this.dataset.mano;
    let numeroAleatorio = Math.floor(Math.random()*3);
    partida.manoOrdenador = partida.manos[numeroAleatorio];

}


function comenzarPartida(){
    partida.manoJugador === "" || partida.manoOrdenador === "" ? alert("Debes de seleccionar una mano"): mostrarManos();
}


function mostrarManos(){
    (document.querySelector("#manoJugador")).src = `./imagenes/${partida.manoJugador}.svg`;
    (document.querySelector("#manoOrdenador")).src = `./imagenes/${partida.manoOrdenador}.svg`;
    (document.querySelector(".versus")).innerHTML = "VS";
    asignarGanador();
    partida.manoJugador = "";
    partida.manoOrdenador = "";
    actualizarMarcador();

}


function asignarGanador(){
    let empate = partida.manoOrdenador === partida.manoJugador ? true : false;
    let ganaJugador = partida.manoJugador === "piedra" && partida.manoOrdenador === "tijeras" || 
        partida.manoJugador === "tijeras" && partida.manoOrdenador === "papel" ||
        partida.manoJugador === "papel" && partida.manoOrdenador === "piedra" ? true : false;

    let resultado = document.querySelector(".resultado");
    
    if(empate){
        resultado.innerHTML = "Ha sido empate";
    }else if(ganaJugador){
        resultado.innerHTML = "Has ganado";
        partida.victoriasJugador++;
    }else{
        resultado.innerHTML = "Gana el ordenador, tú pierdes";
        partida.victoriasOrdenador++;
    }
}


function actualizarMarcador(){
    (document.querySelector("#victoriasJugador")).innerHTML = `Victorias: ${partida.victoriasJugador}`;
    (document.querySelector("#victoriasOrdenador")).innerHTML = `Victorias: ${partida.victoriasOrdenador}`;
}