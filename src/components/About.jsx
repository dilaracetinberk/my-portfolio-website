import React from 'react';
// import '../style/About.css';
import design from '../assets/design.jpg';

function About() {
  return (
    <div className='about-me' id='about'>
        <h2 className='section-title font-bold'>Who I am</h2>
        <p className="section-subtitle section-subtitle-about">Designer & Developer</p>
        <div className="about-body text-center md:text-left ">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis labore laudantium temporibus debitis sed velit accusantium, alias quaerat nesciunt blanditiis doloremque voluptatum provident odio similique corporis, ab nulla beatae vel.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab explicabo, laboriosam reprehenderit reiciendis labore? In, quam aspernatur est consequuntur sunt ipsa pariatur corporis eaque deleniti asperiores vel. Odio, ab!</p>
           </div>
           <img src={design} alt='about-me' className='about-me-img'/>
    </div>
  )
}

export default About