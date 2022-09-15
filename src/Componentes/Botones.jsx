import React from "react";
import "../App.css";

const Botones = ({esMenor, esMayor, estado}) => {
 
  return (
    <>
      <button className="btn" onClick={esMayor} disabled={estado}>
       Mayor o =
      </button>
      <button className="btn" onClick={esMenor} disabled={estado}>
       Menor o =
      </button>
 
    </>
  );
};

export default Botones;
