import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  // const[name,setName]=useState("");
  // const[pass,setPass]=useState("");
  // const nav=useNavigate();

  // const gotoCreateShip=()=>{
  //   nav("/ship")
  // }

  // const handleSubmit=(e)=>{
  //   e.preventDefault(e.target.value);

  //   if(name=="AD-001" && pass=="AD-001"){
  //     nav("/ship");
  //   }
  //   else if(name=="AD-002" && pass=="AD-002"){
  //     nav("/viewship")
  //   }
  //   else if(name=="AD-003" && pass=="AD-003"){
  //     nav("/deleteship")
  //   }
  //   else if(name=="AD-004" && pass=="AD-004"){
  //     nav("/viewRoute")
  //   }
  //   else if(name=="AD-005" && pass=="AD-005"){
  //     nav("/addRoute")
  //   }
  //   else if(name=="AD-006" && pass=="AD-006"){
  //     nav("/deleteRoute")
  //   }
  //   else{
  //     alert("FAIL")
  //   }
  //}
  return (
    <div>
      <form>
    <h1>WElcome to React</h1>
      {/* <input type='text' placeholder='User Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='text' placeholder='Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button onClick={handleSubmit} >Submit</button> */}
      </form>
    </div>
  )
}

export default Login
