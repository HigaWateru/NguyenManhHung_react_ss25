import React from 'react'
import { users } from '../components/userList'
import { useNavigate } from 'react-router-dom'

export default function ListUser() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex gap-3 m-4'>
        {users.map(user => (
          <div key={user.id} className='border border-gray-400 p-4 flex flex-col gap-2'>
            <p>id: {user.id}</p>
            <p>User name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <button className='border border-gray-500 bg-[#efefef] cursor-pointer mt-3' onClick={() => navigate(`/detail/${user.id}`)}>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  )
}
