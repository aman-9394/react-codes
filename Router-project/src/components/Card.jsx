import React, { useEffect, useState } from 'react'

function Card({ v, k }) {
    let [iseditmode, setiseditmode] = useState(false)
    let [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
    let [details, setdetails] = useState({
        name: v.name,
        number: v.number,
        email: v.email,
        profession: v.profession
    })

    let inputhandler = ((e) => {
        setdetails({ ...details, [e.target.name]: e.target.value })
    })

    let contactupdater = (e) => {
        e.preventDefault()
        let index = user.data.findIndex((v, i) => {
            return k == i
        })
        console.log(user)
        console.log("updateduser", { ...user, data: user.data.toSpliced(index, 1, details) })
        setuser({ ...user, data: user.data.toSpliced(index, 1, details) });
        setiseditmode(!iseditmode)
    }

    useEffect(() => {
        console.log("hi");

        localStorage.setItem("user", JSON.stringify(user))

        let fuser = JSON.parse(localStorage.getItem("fuser"))
        let findindex = fuser.findIndex((v) => {
            return v.email == user.email
        })
        fuser.splice(findindex, 1, user)
        localStorage.setItem("fuser", JSON.stringify(fuser))

    }, [user])

    return (
        <>{
            iseditmode ? <>
                <p>form</p>
                <form action="" onSubmit={contactupdater}>
                    Name:<input type="text" name="name" id="" value={details.name} onChange={inputhandler} />
                    Email:<input type="Email" name="email" id="" value={details.email} onChange={inputhandler} />
                    Number:<input type="number" name="number" id="" value={details.number} onChange={inputhandler} />
                    Profession:<input type="text" name="profession" id="" value={details.profession} onChange={inputhandler} />
                    <button>submit</button>
                </form>
            </> : <>
                <p>Name: {details.name}</p>
                <p>Email: {details.email}</p>
                <p>Phone no: {details.number}</p>
                <p>Profession: {details.profession}</p>
                <button onClick={() => remove(k)}>remove</button>
                <button onClick={() => setiseditmode(!iseditmode)}>edit</button>
            </>

        }

        </>
    )
}

export default Card