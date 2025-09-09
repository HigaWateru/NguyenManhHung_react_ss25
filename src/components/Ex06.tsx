import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Detail from '../pages/Detail'

export default function Ex06() {
  return (
    <div>
      <nav className='flex gap-5'>
        <NavLink to={'/'} className='p-3 rounded'>Home</NavLink>
        <NavLink to={'/product'} className='p-3 rounded'>Product</NavLink>
        <NavLink to={'/detail'} className='p-3 rounded'>Detail</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </div>
  )
}
