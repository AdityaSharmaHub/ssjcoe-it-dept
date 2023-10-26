import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container grid place-items-center gap-3 mt-20 mb-[15rem]">
        <h1 className="font-bold text-3xl">We are sorry, 404 - Page Not Found !</h1>
        <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="bg-blue-500 text-white py-3 px-5 rounded mt-5 hover:bg-blue-600">Back to HomePage</Link>
    </div>
  )
}

export default ErrorPage