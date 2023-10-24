import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
    const [head, setHead] = useState("");
    const links = [
        { name: "About", submenu: true, sublink:[
            {
                name: "HOD",
                link: "/about/hod" 
            },
            {
                name: "Contact",
                link: "/about/contact"
            },
            {
                name: "Developers",
                link: "/about/developers"
            }
        ] },
        { name: "Students", submenu: true, sublink:[
            {
                name: "SE",
                link: "/students/se"
            },
            {
                name: "TE",
                link: "/students/te"
            },
            {
                name: "BE",
                link: "/students/be"
            }
        ] },
    ]
    return <>
        {
            links.map(link => (
                <div>
                    <div className="text-left md:cursor-pointer group">
                        <h1 onClick={()=>head !== link.name ? setHead(link.name) : setHead('')} className="px-2 py-2 md:px-4 cursor-pointer relative hover:bg-blue-500 hover:text-white flex justify-between items-center  md:pr-0 pr-5">
                            {link.name}
                            <span className="text-xl md:mt-1 md:mx-2 inline">
                                <ion-icon name={`${head === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div className="absolute top-12 hidden group-hover:md:block hover:md:block">
                                {/* <div className="py-0">
                                    <div className="w-4 h-4 left-3 absolute mt-[-5px] bg-white rotate-45 z-[-1]"></div>
                                </div> */}
                                <div className="bg-white min-w-[150px] shadow-lg">
                                    {
                                        link.sublink.map((items)=>(
                                            <div className="text-gray-500 md:text-black font-normal text-base">
                                                <Link to={items.link} className="hover:bg-blue-100 block py-3 px-4">{items.name}</Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menu */}
                    <div className={`
                        ${head === link.name ? 'md:hidden' : 'hidden'}
                    `}>
                        {
                            link.sublink.map((slink) => (
                                <div>
                                    <div className="py-3 hover:bg-gray-200">
                                        <Link to={slink.link} className="pl-7 font-base md:pr-0 pr-5 block text-gray-500 md:hidden">{slink.name}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </>
}

export default NavLinks