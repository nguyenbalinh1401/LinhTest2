import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Page/Home'
import Welcome from '../../Page/Welcome'

export default function AppRouter() {
  return (
    <div className='w-full min-h-[80vh] flex items-start justify-center'>
      <Routes>
        <Route path='/' element={<Home/>} />   
        <Route path='/welcome' element={<Welcome/>} />  
      </Routes>
    </div>
  )
}
