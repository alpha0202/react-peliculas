import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const subTitulo = "este es un subtitulo";

  const duplicar = (valor: number)=>valor*2;

  const imgUrl = "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
  

  return (
    <>
      <h1 className="rojo">Hola a todos</h1>
      <div className="cuadradoRojo"></div>

      <h3>{subTitulo.toUpperCase()}</h3>
      <h4>el doble de 3 es {duplicar(3)}</h4>
      <img alt="logo react" src={imgUrl}></img>
      <div>
        <input type="checkbox" checked={false} /> este es un checkbox.
      </div>
    </>
  );
}

export default App;
