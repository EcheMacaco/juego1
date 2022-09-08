import { useState } from "react";
import "./App.css";
import Img from "./Componentes/Img";
import atras from "./img/atras.png";
import imagenes from "./imagenes";
import Botones from "./Componentes/Botones";

const MAX_CARTAS = 6;

function App() {
  const getRandomNum = () => {
    let min = 0;
    let max = MAX_CARTAS;
    return Math.round(Math.random() * (max - min) + min);
  };

  let arreglo = imagenes[getRandomNum()];

  // const rootElement = document.getElementById ("root");
  // const refresh =()=>{
  //     ReactDOM.render(<Img sr={imagenes[getRandomNum()].sr} /> );
  // }

  const cambiar = () => {
    return (<Img src={atras} />), console.log("ok");
  };

  return (
    <>
      <div className="div-app">
        <div className="cartas">
          <Img src={atras} className="carta" />
          <Img src={arreglo.src} className="carta" />
        </div>

        <div className="botones">
          <Botones  cambiarlo={cambiar}> </Botones>
        </div>
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// import atras from "./img/atras.png";
// import imagenes from "./imagenes";

// function App() {
//   const getRandomNum = () => {
//     let min = 0;
//     let max = 23;
//     return Math.round(Math.random() * (max - min) + min);
//   };

//   const [x, setX] = useState({
//     valor: "",
//     id: "",
//     src: atras,
//   });

//   function imagenF() {
//     let x = imagenes[getRandomNum()];
//     return setX(x.valor, x.id, x.src, console.log(x));
//   }

//   const imgChange = () => {
//     console.log("cambio");
//   };

//   return (
//     <div className="div-app">
//       <div className="cartas">
//         <img
//           type="img"
//           id="imagen-rev"
//           className="carta"
//           src={atras}
//           name="reves"
//           alt="Imagen Carta"
//         />
//         <img
//           type="img"
//           id={x.id}
//           valor={x.valor}
//           src={x.src}
//           className="carta"
//           name="frente"
//           alt="Imagen Carta"
//           onClick={imgChange}
//         />

//         <div className="contador">Aciertos: {0} </div>
//       </div>
//       <div className="botones">
//         <button type="boton" className="btn" onClick={imagenF}>
//           mayor
//         </button>
//       </div>

//       <div className="mensaje">MENSAJE</div>
//     </div>
//   );
// }
// export default App;
