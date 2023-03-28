import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
// import '../style/About.css';
import design from '../assets/img.png';

function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} >
    <div className='about-me' id='about'>
        <h2 className='section-title font-bold'>Who I am</h2>
        <p className="section-subtitle section-subtitle-about">Developer &amp; Designer</p>
        <div className="about-body text-center md:text-left ">
               <p>Web Developer passionate about creating a difference and having an impact on people	&apos;s lives in a good way with the power of design. Well-versed in leading innovation and composing years of design experience in my organization and a background in various kinds of industries. With a passion for both personal growth and
software development, I was accepted to a coding bootcamp being one of the 3%.</p>
           </div>
          <Link to='/resume'> 
          <button type="button" className='resume-button max-w-xs '>See My Resume</button>
          </Link>
           <img src={design} alt='about-me' className='about-me-img'/>
    </div>
    </motion.div>
  )
}

export default About