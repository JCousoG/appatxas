
import React, { useEffect } from "react";
import {useState} from "react";
import customer from "../customer.png";
import Saldo from "./Saldo"




function Aportacion({appatxas}) {

  const [dif, setDif] = useState(0)
  const [num,setNum] = useState(0)
  const [aport, setAport] =useState("")

  useEffect (
    ()=>{
      setDif(num-appatxas)
    },
    [num, appatxas]
  )
   
  function manexadorAport(evento) {
    
    setNum( parseFloat (evento.target.value))
    if (/^[0-9]*\.?[0-9]{0,2}$/.test ((evento.target.value)))
    {setAport(evento.target.value)} else {
      setAport("");
      setNum(0);}
      }
     
    return (
      

      <div className="aportacion">
        <img src={customer} alt="user" />
       <input type="text"/>
      <label>
        Aportación:
      <input type='text' value={aport} onInput={manexadorAport} ></input>
      </label>
      <label>
        Saldo:
        <Saldo diferencia={dif}/>
      </label>
      
      </div>
     
    )
   
}
 export default Aportacion

 