import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-[#660000] w-full h-20 grid grid-cols-2 px-10 lg:px-15 drop-shadow-lg/50 drop-shadow-black fixed top-0 z-99'>
      <div className='w-full h-full flex items-center'>
        <img src="./logohd.png" alt="" className='w-16' />
        <h1 className='text-[#fefaee] font-gideon text-3xl hidden lg:block'>THE LONEWOLF CAFE</h1>
      </div>
      <div className='w-full h-full flex items-center justify-end'>
        <ul className="items-center w-full justify-end hidden md:flex gap-7 lg:gap-15 md:text-sm lg:text-sm text-[#fefaee] whitespace-nowrap tracking-wider">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `uppercase cursor-pointer ${isActive ? "text-[#FAE1B9]" : "hover:text-[#FAE1B9]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `uppercase cursor-pointer ${isActive ? "text-[#FAE1B9]" : "hover:text-[#FAE1B9]"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `uppercase cursor-pointer ${isActive ? "text-[#FAE1B9]" : "hover:text-[#FAE1B9]"
              }`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `uppercase cursor-pointer ${isActive ? "text-[#FAE1B9]" : "hover:text-[#FAE1B9]"
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `uppercase cursor-pointer ${isActive ? "text-[#FAE1B9]" : "hover:text-[#FAE1B9]"
              }`
            }
          >
            Visit
          </NavLink>

        </ul>

        <i class="bi bi-list md:hidden text-white text-4xl cursor-pointer "></i>
      </div>
    </div>
  )
}

export default Header
