import React from "react";
import "../App.css";

const BotonReiniciar = ({reiniciar}) => {
 
  return (
    <>
      <button className="btn" onClick={reiniciar}>
       Juego Nuevo
      </button>
    </>
  );
};

export default BotonReiniciar;