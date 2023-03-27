import React from 'react';
import {Link} from 'react-router-dom';
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <footer>
      <ul className='social-list'>
        
          <li className='social-list-item'>
            <Link to='https://www.linkedin.com/in/dilaracetinberk/' className='social-list-link'>
            
            <FaLinkedin size={50}/>
           </Link>
           </li>
           <li className='social-list-item'>
            <Link to='https://github.com/dilaracetinberk' className='social-list-link'>
            <GoMarkGithub size={50}/>
           </Link>
          </li>
          <li className='social-list-item'>
          <a href="mailto:dilaracetinberk@gmail.com" className='social-list-link'>
            <GoMail size={50}/>
           </a>
          </li>
        
      </ul>
    </footer>
  )
}

export default Footer