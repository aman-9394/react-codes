import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Nv({ onclick }) {
  let navigate =useNavigate()
  let user = JSON.parse(localStorage.getItem("user"))
  function logouthandler(){
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between", background: "lightgreen", padding: "20px" }}>
      <div>router</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/auth/">Home</Link>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
        <div>Complain</div>
        {
          !user ?
            <>
              <Link to="/Login">Login</Link>
              <Link to="/Register">Register</Link>
            </> :
            <button onClick={logouthandler}>logout</button>
        }
        <Link to="/auth/contact">Contact</Link>
        <Link to="/auth/contactdetails">Contactdetails</Link>
        <Link to="/Course">Course</Link>
      </div>
      <div>Cart</div>
      <button onClick={onclick}>Color</button>
    </div>
  )
}

export default Nv