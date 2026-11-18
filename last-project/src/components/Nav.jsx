import React, { useContext } from 'react'
import { UserContext } from '../App'

function Nav({ cart }) {
    let { name } = useContext(UserContext)
    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", background: "skyblue" }}>
            <p>welcome {name}</p>
            <div style={{ display: "flex", gap: "20px", margin: "0px 30px" }}>

                <div>home</div>
                <div>about</div>
                <div>contact</div>
                <div>service</div>
                <div>info</div>


            </div>
            <div>
                <p>cart {cart}</p>
            </div>

        </div>

    )
}

export default Nav