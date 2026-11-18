import React from 'react'

function Card({ title = "Beautifull Picture", setcart }) {
    function add() {
        setcart((prev)=> prev+1)
    }
    return (
        <div style={{ border: "2px solid black", width: "330px", margin: "20px", padding: "10px" }}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10" alt="" style={{ width: "300px", height: "200px" }} />
            </div>
            <div>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, ut.</p>
                <h3>john doe</h3>
                <button onClick={add} style={{ padding: "5px 8px", background: "blue", color: "white" }}>buy now</button>
            </div>

        </div>
    )
}

export default Card