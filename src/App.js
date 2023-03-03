
import "./App.css"
import { useState } from "react";



function App() {

 let [total, setTotal] = useState("")
 let [numero, setNumero] = useState(0)
 function manexadorTotal(evento) {
  setNumero( parseFloat (evento.target.value))
  if (/^[0-9]*\.?[0-9]{0,2}$/.test ((evento.target.value)))
  {setTotal(evento.target.value)} else {
    setTotal("");
    setNumero(0);}
   
 }
 return (
      <>
    <h1>APPATXAS</h1>
          <label>
        Total:
        <input type="text" value={total} onInput={manexadorTotal}/>
      </label>
        <p> {numero} </p>
    </>
  );
}

export default App;
