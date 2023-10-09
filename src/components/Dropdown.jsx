
const Dropdown = ({ submenus, dropdown }) => {

    return (
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url} className="hover:bg-red-500 block py-3 px-4 rounded-md">{submenu.title}</a>
          </li>
        ))}
      </ul>
    );

    
  };
  
  export default Dropdown;