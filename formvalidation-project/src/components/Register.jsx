import React, { useState } from 'react'

function Register() {

    let [user, setuser] = useState({
        name: "",
        email: "",
        password: ""

    })

    let [showPassword, setShowPassword] = useState(false);

    let inputhandler = ((e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    })

    let formhandler = ((e) => {
        e.preventDefault();
        console.log(user)
        alert("submission successfull")
        localStorage.setItem("fuser",JSON.stringify(user))
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