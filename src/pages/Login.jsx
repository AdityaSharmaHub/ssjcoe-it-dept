import React from 'react'

const Login = () => {
  return (
    <div className='container flex flex-col items-center'>
        <h1 className='text-2xl font-semibold my-10'>Login</h1>
        <form action="">
            <div className='flex flex-col gap-2'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" className='border-2 border-gray-400' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="username">Password</label>
                <input type="password" name="username" id="username" className='border-2 border-gray-400' />
            </div>
        </form>
    </div>
  )
}

export default Login