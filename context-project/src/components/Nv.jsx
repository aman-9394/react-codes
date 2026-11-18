import React, { useContext } from 'react'
import { UserContext } from '../App'

function Nv({onclick}) {
      let {title} = useContext(UserContext)
  return (
    <div style={{display:"flex",justifyContent:"space-between", background:"lightgreen", padding:"20px"}}>
        <div>{title}</div>
        <div style={{display:"flex", gap:"20px"}}>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
            <div>Complain</div>
        </div>
        <div>Cart</div>
        <button onClick={onclick}>Color</button>
    </div>
  )
}

export default Nv