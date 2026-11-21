import React from 'react'
import { BrowserRouter, Outlet, Route, Routes, useParams } from "react-router-dom"
import Nv from './components/Nv'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import Course from './components/Course'
import Holder from './components/Holder'
import Auth from './authorization/Auth'
import Home from './components/Home'
import Contactdetails from './components/Contactdetails'
function App() {
  let router = useParams()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Nv /><Outlet /></>} >
          <Route path="auth" element={<><Auth /><Outlet /></>}>

            <Route index element={<><Home /></>} />
            <Route path="contact" element={<><Contact /></>} />
            <Route path="contactdetails" element={<><Contactdetails /></>} />
            <Route path="course" element={<><Course /><Outlet /></>} >
              <Route path="Holder" element={<><Holder /></>} />
            </Route>
          </Route>
          <Route path="/Login" element={<><Login /></>} />
          <Route path="/Register" element={<><Register /></>} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App