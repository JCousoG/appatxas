
import "./App.css"
import { useEffect, useState } from "react";
import Aportacion from "./componentes/Aportacion";
import { aXDecimales } from "./lib";



function App() {
 let [numeroDeElementos, SetNumeroDeElementos] = useState(2)
 let [elementosHtml, SetElementosHtml] = useState([])
 let [total, setTotal] = useState("")
 let [numero, setNumero] = useState(0)
 let [appatxas, setAppatxas] = useState(0)

 useEffect(
  ()=> { let AppatxasANumero = numero/numeroDeElementos
    setAppatxas(aXDecimales(AppatxasANumero,2))},
   [numero,numeroDeElementos]
 )

 useEffect (
  ()=>{
    const novosElementos = []
    let contador = 0
   
    while (contador < numeroDeElementos) {
      novosElementos.push(<Aportacion key={contador} appatxas={appatxas}/>)
      contador++  
    }
    SetElementosHtml(novosElementos)
  },
  [numeroDeElementos, appatxas]
 )

 function manexadorInput(evento) {
  let novoValor = (evento.target.value)
  let novoValorenNumero = parseInt(novoValor)
  SetNumeroDeElementos(novoValorenNumero)
 }


 function manexadorTotal(evento) {
    if (/^[0-9]*\.?[0-9]{0,2}$/.test ((evento.target.value))) {
      setNumero( parseFloat (evento.target.value))
      setTotal(evento.target.value)
    } else {
      setTotal("");
      setNumero(0);
    }
  }
    

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
