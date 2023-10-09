import React from 'react'
import { menuItems } from '../menuItems'
import MenuItems from './MenuItems'

const Navbar = () => {
  return (
    <div>
      <div className="bg-sky-200">
        <nav className="w-[1200px] mx-auto">
          <ul className="menus flex">
            {menuItems.map((menu, index) => {
              return (
                <MenuItems items={menu} key={index} />  
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar