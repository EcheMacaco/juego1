import React from "react";
import "../App.css";

// const clicMenor = () => {

// document.getElementById("componente-img")

// };

// const clicMayor = () => {

//   document.getElementById("componente-img")
//   return(

//     console.log("a")

//   )
// };

const Botones = ({ cambiarlo }) => {
  return (
    <>
      <button className="btn" onClick={cambiarlo}>
        botonnnnnnn
      </button>
    </>
  );
};

export default Botones;
//  <button
//      type="boton"
//    className="btn" onClick={clicMenor}
//       >
//         ES MENOR{" "}
//       </button>
