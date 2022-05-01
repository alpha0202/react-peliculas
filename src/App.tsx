import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MostrarTexto from "./MostrarTexto";
import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from "./EjemploReloj";

function App() {
  const subTitulo = "este es un subtitulo";
  const [texto, setTexto] = useState("valor por defecto"); //uso de los hooks
  const [checked, setChecked] = useState(false);
  const duplicar = (valor: number) => valor * 2;

  const imgUrl =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png";

  const manejarClick = () => console.log("click");

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  };
  const parteIntermedia = <EjemploReloj/>
  const estilo = {
    backgroundColor: 'red',width:'50px', height: '50px', marginLeft: '1rem'
  }

  const parteInferior = <div style={estilo}></div>

  return (
    <>
      <h1 className="rojo">Hola a todos</h1>
      <div className="cuadradoRojo"></div>
      <br />
      <br />
      <ProyectarContenido>
        <>
          <span>proyectando contenido</span>
        </>
      </ProyectarContenido>
      <hr />

      <ProyectarContenido2 
          parteSuperior = {<h3>esta es la parte superior</h3>}
          parteIntermedia = {parteIntermedia}
          parteInferior = {parteInferior}/>
        
       
     

      <button
        onMouseEnter={() => console.log("entrando...")}
        onClick={manejarClick}
      >
        {" "}
        Clickeame
      </button>
      <br />
      <br />
      <input type="text" onKeyUp={(e) => manejarKeyUp(e)} />
      <br />

      <MostrarTexto texto={texto} />

      <br />

      <h3>{subTitulo.toUpperCase()}</h3>
      <h4>el doble de 3 es {duplicar(3)}</h4>
      <img alt="logo react" src={imgUrl}></img>
      <div>
        <br />
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        />
        este es un checkbox.
        <br />
      </div>
    </>
  );
}

export default App;
