import { createContext, useState } from "react"
import Test from "./components/Test.jsx"
import Nav from "./components/Nav.jsx"
import Card from "./components/Card.jsx"

let UserContext = createContext()
function App() {
    let [cart, setcart] = useState(0)
    let name = "aman"

    return (
        <>
        
            <UserContext.Provider value={{ name }}>
                {/* <Test /> */}
                <Nav cart={cart} />
                <div style={{ display: "flex" }}>
                    <Card setcart={setcart} />
                    <Card title="beautifull bird" setcart={setcart} />
                </div>
            </UserContext.Provider>
        </>
    )
}
export default App
export { UserContext }