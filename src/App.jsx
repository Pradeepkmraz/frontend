import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import Healthcare from './pages/Healthcare'
import WomenEmpowerment from './pages/WomenEmpowerment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/healthcare" element={<Healthcare />} />
      <Route path="/women-empowerment" element={<WomenEmpowerment />} />
    </Routes>
  )
}

export default App
