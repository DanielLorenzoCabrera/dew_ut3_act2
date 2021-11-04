
const partida = {
    manoJugador : "",
    manoOrdenador: "",
    manos : ["piedra","papel", "tijeras"]
    
}




document.addEventListener("DOMContentLoaded", ()=>{


let contenerdorManos = document.querySelector(".manos");
let manos = contenerdorManos.querySelectorAll("img");
manos.forEach(mano => mano.addEventListener("click", seleccionarMano));


let comenzarJuego =  document.querySelector("#comenzarJuego");
comenzarJuego.addEventListener("click", piedraPapelTijeras)




})


function seleccionarMano(){
    partida.manoJugador = this.dataset.mano;
    let numeroAleatorio = Math.floor(Math.random()*3);
    partida.manoOrdenador = partida.manos[numeroAleatorio];

}


function piedraPapelTijeras(){
    if(partida.manoJugador === "" || partida.manoOrdenador === ""){
        alert("Debes de seleccionar una mano");
        console.table(partida)
    }else{
        mostrarManos();
    }
}


function mostrarManos(){
    let empate = partida.manoOrdenador === partida.manoJugador;
    let ganaJugador = [
        `${partida.manoJugador} === "piedra" && ${partida.manoOrdenador} === "tijeras`,
        `${partida.manoJugador} === "tijeras" && ${partida.manoOrdenador} === "papel"`,
        `${partida.manoJugador} === "papel" && ${partida.manoOrdenador} === "piedra"`,
    ]
    

}