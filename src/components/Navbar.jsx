import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  const [open, setOpen] = useState(true);

  return (
    <nav className='navbar shadow-md'>
       <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
           < GiHamburgerMenu name={open ? 'close' : 'menu'}/>
        </button>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-30 ' : 'top-[-490px]'
          }`}>
        <li className="md:ml-8 lg:text-xl text-[16px] md:my-3 my-7">
          <Link to='/' className='navbar-a'>
            Home
          </Link>
          </li>
        <li className="md:ml-8 lg:text-xl text-[16px] cursor-pointer md:my-3 my-7">
          <HashLink smooth to='/#about' className='navbar-a'>
            About
          </HashLink>
            </li>
        <li className="md:ml-8 lg:text-xl text-[16px] cursor-pointer md:my-3 my-7">
          <HashLink smooth to='/#projects' className='navbar-a'>
            Projects
            </HashLink>
            </li>
        <li className="md:ml-8 lg:text-xl text-[16px] cursor-pointer md:my-3 my-7">
          <HashLink smooth to='/#footer' className='navbar-a'>
            Contact
            </HashLink>
            </li>
      </ul>
      
    </nav>
  )
}

export default Navbar