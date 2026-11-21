import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Cred() {
    let [data, setdata] = useState(JSON.parse(localStorage.getItem("data"))?? [])
    let [inpval, setinpval] = useState("")
    function add() {
        console.log("jkh");
        setdata([...data, inpval])
    }

    function remove(i) {
        let index = data.findIndex((v, k) => {
            return k == i


        })
        setdata(data.toSpliced(index, 1))
    }

    function del() {
        setdata(data.toSpliced(data.length - 1, 1))
    }

    function edit(i) {
        let index = data.findIndex((v, k) => {
            return k == i
        })
        let newdata = prompt("entr list:")
        setdata(data.toSpliced(index, 1, newdata))
    }

    useEffect(() => {
        console.log("hi");
        
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])


    return (
        <div>
            <div>

                <input type="text" value={inpval} onChange={(e) => setinpval(e.target.value)} />
                <button onClick={add}>add</button>
                <button onClick={del}>del</button>
            </div>
            <ul style={{ width: "300px" }}>
                {
                    data.map((v, k) => {
                        return <div key={k} style={{ display: 'flex', justifyContent: "space-between" }}>
                            <li >{v}</li>
                            <p>
                                <button onClick={() => remove(k)}>X</button><button onClick={() => edit(k)}>edit</button>
                            </p>
                        </div>
                    })
                }

            </ul>
        </div>
    )
}

export default Cred