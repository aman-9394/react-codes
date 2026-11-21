import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../components/Home'

function Auth() {
    let user = JSON.parse(localStorage.getItem("user"))
    return !user ? <Navigate to="/login" /> : <></>
}

export default Auth