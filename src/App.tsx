import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router'

import LandingPage from './components/LandingPage/LandingPage'

const App = () => {
  return (
    <div
      className='
      relative bg-white
      w-full
      flex mx-auto
      '
    >
      <Routes>
        <Route path='/home/*' element={<LandingPage />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  )
}

export default App
