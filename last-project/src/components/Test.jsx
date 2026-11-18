import { useState } from "react"
import Cars from "./Cars"


function Test() {

  function func() {
    if (age <= 9) {
      setage(age + 1)

    }
  }
  function func1() {
    if (age >= 1) {
      setage(age - 1)

    }
  }

  let [age, setage] = useState(0)
  return <>
    <h1>my cars</h1>
    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
      <Cars color="red" modal="jaguar" />
      <Cars color="blue" modal="bucatti"/>
      <Cars color="green" />
      <Cars  />
    </div>
    <h1>my age is {age}</h1>
    <button onClick={func}>increase</button>
    <button onClick={func1}>decrease</button>
    <img style={{ height: "200px", width: "200px", background: "yellow" }} src="./favicon.svg" alt="" />
    {/* /* {<div class="para">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas voluptatibus at iure sequi voluptate autem rem incidunt accusantium unde, veniam, ipsam veritatis quasi labore?</p>
    </div> }*/ }

  </>
}
export default Test