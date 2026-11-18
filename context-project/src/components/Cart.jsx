import React, { useContext, useState } from 'react'
import { UserContext } from '../App'

function Cart() {
    let { title } = useContext(UserContext)
    let [dark, setDark] = useState(false)
    // function display() {
    //     setDark(!dark)
    // }
    return (
        <div style={{ backgroundColor: dark ? "gray" : "white",Color: dark ? "gray" : "white", margin: "30px", border: "2px solid black", width: "340px", padding: "15px" }}>
            <div>
                <img src="https://images7.alphacoders.com/135/thumb-1920-1354882.jpeg" alt="" style={{ width: "300px", height: "200px" }} />
            </div>
            <div>
                <h1>Demon slayer</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iste a quia! sdnjd dfnklkdfmdc fcnc ncd nkldnkld</p>
                <button style={{ marginTop: "8px", padding: "5px ", background: "lightgreen", color: "white" }}>buy now</button>
                <button onClick={()=>setDark(!dark)}>{dark?"light":"Dark"}</button>
            </div>
        </div>
    )
}

export default Cart