import { useParams } from 'react-router-dom'
import { users } from '../components/userList'
import React from 'react'

export default function UserDetail() {
    const { id } = useParams()
    const user = users.find(user => user.id === Number(id))
    return (
        user ? (
            <div className='flex flex-col gap-3 m-4 w-[220px]'>
                <h2 className='font-medium'>Thông tin chi tiết</h2>
                <div className='border border-gray-400 p-4 flex flex-col gap-2'>
                    <p>id: {user.id}</p>
                    <p>User name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address}</p>
                </div>
            </div>
        ) : (
            <div>Không tìm thấy thông tin</div>
        )
    )
}
