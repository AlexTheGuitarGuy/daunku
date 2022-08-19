import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import useScreenSize from './hooks/useScreenSize'
import { setIsMobile } from './redux/app-reducer'

const App = () => {
  const screenSize = useScreenSize()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsMobile(screenSize.dynamicWidth < 1366 && true))
  }, [screenSize.dynamicWidth, dispatch])

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
