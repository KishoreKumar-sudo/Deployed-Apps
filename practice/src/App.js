import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Components/Admin'
import Doctor from './Components/Doctor'
import Medical from './Components/Medical'
import Reception from './Components/Reception'
import Home from './Components/Home/Home'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/home" element = {<Home/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/doctor" element = {<Doctor/>}/>
        <Route path="/medical" element = {<Medical/>}/>
        <Route path="/reception" element = {<Reception/>}/>
      </Routes>
    </Router>
  )

}

export default App