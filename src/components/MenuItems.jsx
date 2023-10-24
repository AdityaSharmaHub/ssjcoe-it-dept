import Dropdown from './Dropdown';
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);


  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)} className="py-3 px-8 block hover:bg-blue-500 hover:text-white font-medium rounded-md">
            {items.title}{' '}&#9660;
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link to={items.url} className="py-3 px-8 block hover:bg-blue-500 hover:text-white font-medium rounded-md">{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;