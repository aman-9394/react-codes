import React, { useState } from 'react'

function Login() {

  let [user, setuser] = useState({
    email: "",
    password: ""
  })
  let [showPassword, setShowPassword] = useState(false);


  let inputhandler = ((e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  })

  let formhandler = ((e) => {
    e.preventDefault();
    let fuser = JSON.parse(localStorage.getItem("fuser"))
    console.log(fuser,user)
    if(fuser.email==user.email && fuser.password==user.password){
      alert("Login successfull")


    }
    else{
      alert("login failed")
    }
  })


  return (

    <form onSubmit={formhandler} >
      <h2>Welcome Back!</h2>
      <p>Please login to your account</p>
      <div>


        <label>Email Address</label>
        <input
          name='email'
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={inputhandler}
          required
        />
      </div>

      <div className="password-box">
        <label>Password</label>
        <input
          name='password'
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={user.password}
          onChange={inputhandler}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <a href="#forgot" className="forgot">
        Forgot Password?
      </a>

      <button type="submit" className="login-btn">
        Login
      </button>

      <p className="signup">
        Don't have an account? <a href="#signup">Sign Up</a>
      </p>
    </form>

  );

}

export default Login