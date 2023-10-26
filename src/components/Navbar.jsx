import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-sky-200 z-50 sticky top-0 shadow-sm">
      <div className="flex items-center font-medium justify-center">
        <div className="z-50 md:w-auto w-full flex justify-between items-center px-4 py-3">
          <h1 className="md:hidden text-lg">Menu</h1>
          <div className="text-3xl md:hidden flex" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-4 font-[Poppins]"> 
          <li>
            <Link to="/" className="py-3 px-5 inline-block hover:bg-blue-500 hover:text-white">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/gallery" className="py-3 px-5 inline-block hover:bg-blue-500 hover:text-white">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/faculty" className="py-3 px-5 inline-block hover:bg-blue-500 hover:text-white">
              Faculty
            </Link>
          </li>
          <li>
            <Link to="/alumni" className="py-3 px-5 inline-block hover:bg-blue-500 hover:text-white">
              Alumni
            </Link>
          </li>
          <li>
            <Link to="/notices" className="py-3 px-5 inline-block hover:bg-blue-500 hover:text-white">
              Notices
            </Link>
          </li>
          <li>
            <Link to="/login" className="py-3 px-5 inline-block hover:bg-blue-500 hover:text-white">
              Login
            </Link>
          </li>
        </ul>
        {/* Mobile responsive */}
        <ul className={`
        md:hidden absolute bg-white w-full top-12 py-4 border-2 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}>
          <li>
            <Link to="/" className="py-4 px-2 block hover:bg-blue-100" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <NavLinks onClick={() => setOpen(!open)} />
          <li>
            <Link to="/gallery" className="py-4 px-2 block hover:bg-blue-100" onClick={() => setOpen(!open)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/faculty" className="py-4 px-2 block hover:bg-blue-100" onClick={() => setOpen(!open)}>
              Faculty
            </Link>
          </li>
          <li>
            <Link to="/alumni" className="py-4 px-2 block hover:bg-blue-100" onClick={() => setOpen(!open)}>
              Alumni
            </Link>
          </li>
          <li>
            <Link to="/notices" className="py-4 px-2 block hover:bg-blue-100" onClick={() => setOpen(!open)}>
              Notices
            </Link>
          </li>
          <li>
            <Link to="/login" className="py-4 px-2 block hover:bg-blue-100" onClick={() => setOpen(!open)}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar