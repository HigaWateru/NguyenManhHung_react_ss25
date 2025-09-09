import React from 'react'

export default function Login() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form action="" className='flex flex-col w-[400px] gap-3 p-8 rounded-2xl shadow-2xl'>
        <h2 className='font-medium text-2xl w-[100%] text-center'>Login account</h2>
        <label htmlFor="" className='font-medium'>Your Email</label>
        <input type="email" className='border-1 border-gray-500 px-2 py-1 rounded outline-none' placeholder='name@company.com'/>
        <label htmlFor="" className='font-medium'>Password</label>
        <input type="password" className='border-1 border-gray-500 px-2 py-1 rounded outline-none'/>
        <button className='p-2 text-white bg-[#2563eb] rounded mt-7'>Login account</button>
        <p className='w-[100%] text-center font-light'>Already have an account? <a href="#" className='font-medium text-gray-600'>Register here</a></p>
      </form>
    </div>
  )
}
