import React, { useState } from 'react'

export default function Cal1() {
    const [n1,setn1]=useState(0)
    const [n2,setn2]=useState(0)
    const [res,setres]=useState(0)
    


    const sum=()=>{

       setres(Number(n1)+Number(n2)) 
    }
  return (
    <div>
      <h1>    Exemple calcul : </h1>


      Nombre 1: <input type="text" onChange={(e)=>{setn1(e.target.value)}} value={n1}/>

      <br />

      Nombre 2: <input type="text"  onChange={(e)=>{setn2(e.target.value)}}  value={n2} />


      <br />
      <input type="button" value="Somme"  onClick={sum} />

      <br />

      Resultat :   <input type="text"  value={res} /> 
    </div>
  )
}
