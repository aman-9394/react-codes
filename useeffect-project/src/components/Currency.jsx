import React, { useEffect, useState } from 'react'
import useFetch from '../customehooks/useFetch'

function Currency() {
    let [amt, setAmt] = useState(0)
    let [from, setFrom] = useState("USD")
    let [to, setTo] = useState("INR")
    let [convertAmt, setConvertAmt] = useState(null)
    let [api, setApi] = useState(null)

    let data = useFetch(api)

    let converter = () => {
        setApi(`https://v6.exchangerate-api.com/v6/943a6014a8c1353d665076a5/latest/${from}`)
        // console.log("api", api);
        // console.log("data", data);
        // console.log(convertAmt);
    }
    useEffect(()=>{
        console.log(api);
        
        setConvertAmt(data?.conversion_rates?.[to] * amt)
    },[data,api])

    return (
        <div>
            <input type="text" placeholder='enter your money' value={amt} onChange={(e) => setAmt(e.target.value)} />
            <input type="text" placeholder='enter your money' value={from} onChange={(e) => setFrom(e.target.value)} />
            <input type="text" placeholder='enter your money' value={to} onChange={(e) => setTo(e.target.value)} />
            <button onClick={converter}>convert</button>
            <p>{convertAmt}</p>
        </div>
    )
}

export default Currency