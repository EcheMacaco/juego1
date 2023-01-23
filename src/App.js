import "./App.css";
import atras from "./img/atras.png";
import imagenes from "./imagenes";
import BotonesMayorMenor from "./Componentes/BotonesMayorMenor";
import BotonesEstado from "./Componentes/BotonesEstado";
import React, { useState } from "react";



let cartasJugadas = imagenes;
let contador = 0;
let cartajugada = {
  src: { atras },
  valor: 0,
  id: 0,
};
function App() {
  const [jugando, setJugando] = useState(false);
  const [textoMensaje, setTextoMensaje] = useState(
    "COMENCEMOS UN NUEVO JUEGO..."
  );

  

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
      setJugando(true);
      setTextoMensaje("MUY BIEN!");
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
          "PERDISTE!! " +
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
      setJugando(true);
      console.log(cartajugada.valor + " = valor carta jugada");
      console.log(nuevaCarta.valor + " = valor carta nueva");
      setTextoMensaje("MUY BIEN!");
    }
    cartajugada = nuevaCarta;
    cartasJugadas = cartasJugadas.filter(
      (cartasJugadas) => cartasJugadas.id !== nuevaCarta.id
    );
    contador = contador + 1;
  }
  function reiniciar() {
    setJugando(false);
    cartasJugadas = imagenes;
    contador = 0;
    document.getElementById("cartaFrente").src = `${atras}`;
    cartajugada.valor = 0;
    setTextoMensaje("QUIERES COMENZAR A JUGAR ???");
  }

  function comenzar() {
    if (jugando === false && contador === 0) {
      cartasJugadas = imagenes;
      let min = 0;
      let max = cartasJugadas.length - 1;
      let randomIndex = Math.round(Math.random() * (max - min) + min);
      let nuevaCarta = cartasJugadas[randomIndex];
      document.getElementById("cartaFrente").src = `${nuevaCarta.src}`;
      cartajugada = nuevaCarta;
      cartasJugadas = cartasJugadas.filter(
        (cartasJugadas) => cartasJugadas.id !== nuevaCarta.id
      );
      console.log(cartajugada.valor + " = valor carta jugada");
      console.log(nuevaCarta.valor + " = valor de nueva carta");
      contador = 0;
      setTextoMensaje("A JUGAR!");
      setJugando(true);
    }
  }

  return (
    <>
      <div className="div-app">
        <div className="mesa">
          <img id="carta" src={atras} className="carta" />
          <img id="cartaFrente" src={atras} className="carta" />
        </div>
        <div className="botones">
            <BotonesMayorMenor
              esMayor={getRandomMayor}
              estadoBtn={!jugando}
              esMenor={getRandomMenor}
            />{" "}
          </div>
          <div className="mensaje">{textoMensaje}</div>
        <div className="botones">
          <BotonesEstado reiniciar={reiniciar} comenzar={comenzar} />
        </div>
      </div>
    </>
  );
}

export default App;
