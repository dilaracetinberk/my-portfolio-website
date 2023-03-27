import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/DilaraCetinberk1.jpg';

// import '../style/Intro.css'

function Intro() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    transition={{ duration: 0.7, staggerChildren: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    <div className='intro font-sans'>
        <h1 className='section-title'>Hi, I am <strong>Dilara Cetinberk</strong></h1>
        <p className="section-subtitle section-subtitle-intro">FRONT-END DEVELOPER</p>
        <img src={profile} alt='profile' className='intro-img'/>

    </div>
    </motion.div>
  )
}

export default Intro