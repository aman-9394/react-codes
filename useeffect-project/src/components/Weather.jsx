import React, { useEffect, useState } from 'react'
import useFetch from '../customehooks/useFetch'

function Weather() {
    let [state, setstate] = useState(null)
    let [api, setApi] = useState(null)
    let [showstate, setshowstate] = useState(null)

    let key = "9d0dd02c08971bd50a08efe961450ef0"

    let data = useFetch(api)
    console.log("data:", data)

    let show = () => {
        setApi(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${key}`)
    }

    useEffect(() => {
        let cel = data?.main?.temp - 273
        setshowstate(cel.toFixed(2))
        // console.log(showstate);

    })



    return (
        <div>
            <input type="text" placeholder='enter your state' value={state} onChange={(e) => setstate(e.target.value)} />
            <button onClick={show}>show</button>
            <p>{showstate}</p>
        </div>
    )
}

export default Weather
// 9d0dd02c08971bd50a08efe961450ef0