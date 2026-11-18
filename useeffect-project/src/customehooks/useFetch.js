import React, { useEffect, useState } from 'react'

function useFetch(api) {
    let [data, setdata] = useState(null)

    useEffect(() => {
        console.log("api",api);
        
        if (!api) { return }
        fetch(api)
            .then((res) => {
                console.log(res);
                return res.json()
            })
            .then((d) => {
                // console.log(d)
                setdata(d)
            })
    }, [api])
    return data

}

export default useFetch