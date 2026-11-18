import React, { useState } from 'react'

function Register() {



    let [user, setuser] = useState(

        {
            name: "",
            email: "",
            password: ""

        }
    )

    // let [users, setUsers] = useState([]);

    let [showPassword, setShowPassword] = useState(false);

    let inputhandler = ((e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    })

    // let formhandler = ((e) => {
    //     e.preventDefault();
    //     console.log(user)
    //     let updatedUsers = [...users, user];
    //     console.log(updatedUsers);
    //     setUsers(updatedUsers);
    //     alert("submission successfull")
    //     localStorage.setItem("fuser", JSON.stringify(user))
    //     localStorage.setItem("fuser", JSON.stringify(updatedUsers));
    // })
    let formhandler = ((e) => {
        e.preventDefault();
        console.log(user)
        let fuser = JSON.parse(localStorage.getItem("fuser"))||[]
        let finduser = fuser.find((v) => {
            return v.email == user.email
        })
        if(finduser){
            alert("user already exists!")
            return
        }
        console.log(fuser);

        fuser=[...fuser,user]
        localStorage.setItem("fuser", JSON.stringify(fuser))
        alert("submission successfull")
    })


    return (
        <form onSubmit={formhandler}>
            <h1>Register Form</h1>
            <div>
                Name: <input type="text" name="name" id=""

                    value={user.name}
                    onChange={inputhandler} />
            </div>

            <div>
                Email: <input type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={inputhandler}
                />
            </div>
            <div>
                password: <input type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={inputhandler}
                    required />
                <button type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Hide" : "Show"}</button>
            </div>

            <div>
                <button type='submit'>Register</button>
            </div>

        </form>
    )
}

export default Register