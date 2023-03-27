import React from 'react';
// import '../style/About.css';
import design from '../assets/img.png';

function About() {
  return (
    <div className='about-me' id='about'>
        <h2 className='section-title font-bold'>Who I am</h2>
        <p className="section-subtitle section-subtitle-about">Designer &amp; Developer</p>
        <div className="about-body text-center md:text-left ">
               <p>Web Developer passionate about creating a difference and having an impact on people	&apos;s lives in a good way with the power of design. Well-versed in leading innovation and composing years of design experience in my organization and a background in various kinds of industries. With a passion for both personal growth and
software development, I was accepted to a coding bootcamp being one of the 3%.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab explicabo, laboriosam reprehenderit reiciendis labore? In, quam aspernatur est consequuntur sunt ipsa pariatur corporis eaque deleniti asperiores vel. Odio, ab!</p>
           </div>
           <img src={design} alt='about-me' className='about-me-img'/>
    </div>
  )
}

export default About