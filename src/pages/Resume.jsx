import React from 'react';
import { motion } from 'framer-motion';
import resume from '../assets/DilaraCetinberk_Frontend_CV.pdf';



function Resume() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} >
    <div className='resume-container'>
        <h1 className='resume-title'>My Resume</h1>
        <div className='resume-div flex flex-col justify-center'>
        <iframe title = "My Resumé" className='resume' src={resume} />
    </div>
    </div>
    </motion.div>
  )
}

export default Resume