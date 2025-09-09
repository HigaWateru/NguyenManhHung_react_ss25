import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListUser from '../pages/ListUser'
import UserDetail from '../pages/UserDetail'

export default function Ex08() {
    return (
        <Routes>
            <Route path='/' element={<ListUser />} />
            <Route path='/detail/:id' element={<UserDetail />} />
        </Routes>
    )
}
