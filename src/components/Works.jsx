import React from 'react';
import {Link} from 'react-router-dom';
import p1 from '../assets/p1.JPG';
import p2 from '../assets/p2.JPG';
import p3 from '../assets/p3.JPG';
import p4 from '../assets/p4.PNG';
import p5 from '../assets/p5.JPG';

function Works() {
  return (
    <div className='my-work'>
      <h2 className='section-title'>My Work</h2>
      <div className='portfolio'>
        <Link to='/project1' className='portfolio-item'>
         <img src={p1} alt='project1' className='portfolio-img'/>
        </Link>
        <Link to='/project2' className='portfolio-item'>
         <img src={p2} alt='project2' className='portfolio-img'/>
        </Link>
        <Link to='/project3' className='portfolio-item'>
         <img src={p3} alt='project3' className='portfolio-img'/>
        </Link>
        <Link to='/project4' className='portfolio-item'>
         <img src={p4} alt='project4' className='portfolio-img'/>
        </Link>
        <Link to='/project5' className='portfolio-item'>
         <img src={p5} alt='project5' className='portfolio-img'/>
        </Link>
      </div>
      
    </div>
  )
}

export default Works