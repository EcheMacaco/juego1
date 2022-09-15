import "./App.css";
import atras from "./img/atras.png";
import imagenes from "./imagenes";
import Botones from "./Componentes/Botones";
import BotonReiniciar from "./Componentes/BotonReiniciar";
import React, { useState } from "react";


function App() {
  const MAX_CARTAS = 23;
  let cartasJugadas = imagenes;
  let contador = -1;
  let cartajugada = {
    src: { atras },
    valor: 0,
    id: 0,
  };
  

   const [jugando, setJugando] = useState(true);

  // if (estadoDeJuego) {
  //   console.log("aca iria el cartel");
  // } else {
  //   console.log("chau cartl");
  // }
  const [textoMensaje, setTextoMensaje] = useState("JUGANDO!!");

  function getRandomMayor() {
    let min = 0;
    let max = cartasJugadas.length - 1;
    let randomIndex = Math.round(Math.random() * (max - min) + min);
    let nuevaCarta = cartasJugadas[randomIndex];
    document.getElementById("cartaFrente").src = `${nuevaCarta.src}`;
    if (nuevaCarta.valor < cartajugada.valor) {
      setTextoMensaje(
        "PERDISTE!! " +
          nuevaCarta.valor +
          " es menor que " +
          cartajugada.valor +
          ". Tu puntaje fue de: " +
          contador +
          " aciertos!"
      );
      setJugando(false);
    } else {
      console.log("el valor es mayor porque es : " + nuevaCarta.valor);
      setJugando(true);
    }
    cartajugada = nuevaCarta;

    cartasJugadas = cartasJugadas.filter(
      (cartasJugadas) => cartasJugadas.id !== nuevaCarta.id
    );
    console.log(cartasJugadas);
    contador = contador + 1;
    console.log(contador);
  }

  function getRandomMenor() {
    let min = 0;
    let max = cartasJugadas.length - 1;
    let randomIndex = Math.round(Math.random() * (max - min) + min);
    let nuevaCarta = cartasJugadas[randomIndex];
    document.getElementById("cartaFrente").src = `${nuevaCarta.src}`;
    if (nuevaCarta.valor > cartajugada.valor && cartajugada.valor !== 0) {
      setTextoMensaje(
        ` ${
          "PERDISTE!!" +
          nuevaCarta.valor +
          " es mayor que " +
          cartajugada.valor +
          ". Tu puntaje fue de: " +
          contador +
          " aciertos!"
        }`
      );
      setJugando(false);
    } else {
      console.log("el valor es menor porque es : " + nuevaCarta.valor);
      setJugando(true);
    }
    cartajugada = nuevaCarta;
    cartasJugadas = cartasJugadas.filter(
      (cartasJugadas) => cartasJugadas.id !== nuevaCarta.id
    );
    console.log(cartasJugadas);
    contador = contador + 1;
    console.log(contador);
  }
  function reiniciar() {
    if (document.getElementById("cartaFrente").src != `${atras}`){
    setJugando(true);
    cartasJugadas = imagenes;
    contador = -1;
    document.getElementById("cartaFrente").src = `${atras}`;
    cartajugada.valor = 0;
    setTextoMensaje("JUGANDO!!");
    }
    else{
 console.log("else del REINICIAR")
    }
   
  }

  return (
    <>
      <div className="div-app">
        <div className="cartas">
          <img id="carta" src={atras} className="carta0" />
          <img id="cartaFrente" src={atras} className="carta" />
          
        </div> 
        <div className="mensaje">{textoMensaje}</div>
        <div className="botones">
        
            <Botones 
              esMayor={getRandomMayor} estado={!jugando} //cambiar estado del boton evaluando estado del juego!
              esMenor={getRandomMenor} 
            />
          
          <BotonReiniciar reiniciar={reiniciar} />
          </div>
       
      </div>
    </>
  );
}

export default App;
