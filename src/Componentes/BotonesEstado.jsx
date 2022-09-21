import React from "react";
import "../App.css";

const BotonesEstado = ({reiniciar, comenzar}) => {
 
  return (
    <>
      <button className="btn-reiniciar" onClick={reiniciar}>
       REINICIAR
      </button>
      <button className="btn-comenzar" onClick={comenzar}> 
       COMENZAR
      </button>
    </>
  );
};

export default BotonesEstado;