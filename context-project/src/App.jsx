import React, { createContext, useState } from 'react'
import Nv from './components/Nv'
import Cart from './components/Cart'

let UserContext = createContext()
function App() {
    // let title = "hashirama"
    let [title, sutTitle] = useState("hashirama")
    let [color, setcolor] = useState("#276547")
    function colorChanger() {
        let val = "#" + Math.round(Math.random() * 1000000)
        console.log(val);

        setcolor(val)
    }
    return (
        <>
            <UserContext.Provider value={{ title }}>
                <Nv onclick={colorChanger} />
                <div  class = "card"style={{ display: "flex", backgroundColor: color }}>
                    <Cart />
                    <Cart />
                    <Cart />

                </div>
            </UserContext.Provider>
        </>
    )
}

export default App
export { UserContext }