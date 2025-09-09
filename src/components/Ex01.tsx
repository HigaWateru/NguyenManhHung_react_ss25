import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

export default function Ex01() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
