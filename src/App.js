
import "./App.css"
import { useEffect, useState } from "react";
import Aportacion from "./componentes/Aportacion";



function App() {
 let [numeroDeElementos, SetNumeroDeElementos] = useState(0)
 let [elementosHtml, SetElementosHtml] = useState([])
 useEffect (
  ()=>{
    const novosElementos = []
    let contador = 0
    while (contador < numeroDeElementos) {
      novosElementos.push(<Aportacion appatxas={appatxas}/>)
      contador++
    }
    SetElementosHtml(novosElementos)
  },
  [numeroDeElementos]
 )s

 let [total, setTotal] = useState("")
 let [numero, setNumero] = useState(0)
 function manexadorTotal(evento) {
  setNumero( parseFloat (evento.target.value))
  if (/^[0-9]*\.?[0-9]{0,2}$/.test ((evento.target.value)))
  {setTotal(evento.target.value)} else {
    setTotal("");
    setNumero(0);}
    }
    const [appatxas, setAppatxas] = useState(0)
    useEffect(
      ()=> {setAppatxas(numero/numeroDeElementos)},
      [numero,numeroDeElementos]
      
    )
 return (
      <>
    <h1>APPATXAS</h1>
          <label>
        Total:
        <input type="text" value={total} onInput={manexadorTotal}/>
      </label>
        <p>APPATXA: {appatxas}€ </p>
        <label>
          Appatxers:
        <input type= "range" max="10" min="2" value={numeroDeElementos} onInput={manexadorInput}/>
        </label>
            <p>{numeroDeElementos}</p>

            {elementosHtml}
    </>
  );
}

export default App;
