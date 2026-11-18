import React from 'react'
import { Link } from 'react-router-dom'


function Nv({onclick}) {
      
  return (
    <div style={{display:"flex",justifyContent:"space-between", background:"lightgreen", padding:"20px"}}>
        <div>router</div>
        <div style={{display:"flex", gap:"20px"}}>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
            <div>Complain</div>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Course">Course</Link>
        </div>
        <div>Cart</div>
        <button onClick={onclick}>Color</button>
    </div>
  )
}

export default Nv