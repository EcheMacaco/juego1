import React from "react";
import "../App.css";

const BotonesMayorMenor = ({ esMenor, esMayor, estadoBtn }) => {
  return (
    <>
      <button className="btn" onClick={esMayor} disabled={estadoBtn}>
        MAYOR O IGUAL
      </button>
      <button className="btn" onClick={esMenor} disabled={estadoBtn}>
        MENOR O IGUAL
      </button>
    </>
  );
};

export default BotonesMayorMenor;
