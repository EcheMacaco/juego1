import React from "react";
import "../App.css";



const getRandomNum = () => {
  let min = 1;
  let max = 10;
  return Math.round(Math.random() * (max - min) + min);
};


// const clicMenor = () => {
  
// document.getElementById("componente-img")

// };


// const clicMayor = () => {

//   document.getElementById("componente-img")
//   return(
    
//     console.log("a")

//   )
// };

const Botones = () => {
  return (
    <>
      <button 
      // type="boton" 
      // className="btn" onClick={clicMayor}
      >
        {/* ES MAYOR{" "} */}
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