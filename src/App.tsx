import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/' element={<Navigate to='/landing-page' />} />
      </Routes>
    </div>
  )
}

export default App
