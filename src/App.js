import { useState } from "react";
import "./App.css";
import Botones from "./Componentes/Botones";
import atras from "./img/atras.png";
import imagenes from "./imagenes";

function App() {
  const getRandomNum = () => {
    let min = 0;
    let max = 23;
    return Math.round(Math.random() * (max - min) + min);
  };

  
  const [cartita, setCartita] = useState({
    id: "",
    valor: "",
    src: "",
  
  });
  

  

  return (
    <div className="div-app">
      <div className="cartas">
        <img
        type="img"
          id="imagen-rev"
          className="carta"
          src={atras}
          name="reves"
          alt="Imagen Carta"
        />

        <img
          type="img"
          id="imagen-front"
          className="carta"
          
          name=""
          alt="Imagen Carta"
        />
         <img
          id={cartita.id}
          valor={cartita.valor}
          src={cartita.src}
          className="carta"
          
          name=""
          alt="Imagen Carta"
        />

        <div className="contador">Aciertos: {0} </div>
      </div>
      <div className="botones">
        <button
          type="boton"
          className="btn"
          onClick={imagenRandom =()=> imagenes[getRandomNum()]}>
          mayor
        </button>
      </div>

      <div className="mensaje">MENSAJE</div>
    </div>
  );
}
export default App;


