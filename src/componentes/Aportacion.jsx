
import React from "react";
import {useState} from "react";
import customer from "../customer.png";
import Saldo from "./"




function Aportacion() {
  
   let [num,setNum] = useState(0)
  function manexadorAport(evento) {
   setNum( parseFloat (evento.target.value))
   if (/^[0-9]*\.?[0-9]{0,2}$/.test ((evento.target.value)))
   {setNum(evento.target.value)} else {
    
     setNum(0);}

    }

    return (
      

      <div className="aportacion">
        <img src={customer} alt="user" />
       <input type="text"/>
      <label>
        Aportación:
      <input type='text' value={num} onInput={manexadorAport} ></input>
      </label>
      <label>
        Saldo:
        <Saldo/>
      </label>
      
      </div>
     
    )
   
}
 export default Aportacion

 