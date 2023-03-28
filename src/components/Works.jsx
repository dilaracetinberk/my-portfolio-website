import React from 'react';
// import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import p1 from '../assets/p1.JPG';
import p2 from '../assets/p2.JPG';
import p3 from '../assets/p3.JPG';
import p4 from '../assets/p4.PNG';
import p5 from '../assets/p5.JPG';
import p6 from '../assets/p6.JPG';

function Works() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} >
    <div className='my-work' id='projects'>
      <h2 className='section-title'>My Work</h2>
      <div className='portfolio'>
        <div className='portfolio-item'>
         <img src={p1} alt='project1' className='portfolio-img'/>
         <div className='project-section text-center w-full'>
          <div className='project-title font-bold pb-4'>
            RefuBook Project
          </div>
          <div className='project-link'>
            <a href='https://github.com/dilaracetinberk/Refubook-Venus'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>CODE</button></a>
              <span> | </span>
            <a href='https://refubook-venus.netlify.app/'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>DEMO</button></a>
          </div>
         </div>
        </div>
        <div className='portfolio-item'>
         <img src={p2} alt='project2' className='portfolio-img'/>
         <div className='project-section text-center w-full'>
          <div className='project-title font-bold pb-4'>
          Movie Worm Project
          </div>
          <div className='project-link'>
            <a href='https://github.com/dilaracetinberk/movie-project-movie-worm'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>CODE</button></a>
              <span> | </span>
            <a href='https://movie-worm.netlify.app/'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>DEMO</button></a>
          </div>
         </div>
        </div>
        <div className='portfolio-item'>
         <img src={p3} alt='project3' className='portfolio-img'/>
         <div className='project-section text-center w-full'>
          <div className='project-title font-bold pb-4'>
            Hangman Game
          </div>
          <div className='project-link'>
            <a href='https://github.com/dilaracetinberk/hangman-game'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>CODE</button></a>
              <span> | </span>
            <a href='https://lets-hangman.netlify.app/'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>DEMO</button></a>
          </div>
         </div>
        </div>
        <div className='portfolio-item'>
         <img src={p4} alt='project4' className='portfolio-img'/>
         <div className='project-section text-center w-full'>
          <div className='project-title font-bold pb-4'>
            Meme Generator
          </div>
          <div className='project-link'>
            <a href='https://github.com/Recoded-Spark-Turkey-2022/meme-generator-las_jefas'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>CODE</button></a>
              <span> | </span>
               <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>DEMO</button>
          </div>
         </div>
        </div>
        <div className='portfolio-item'>
         <img src={p5} alt='project5' className='portfolio-img'/>
         <div className='project-section text-center w-full'>
          <div className='project-title font-bold pb-4'>
            Madlibs Game
          </div>
          <div className='project-link'>
            <a href='https://github.com/dilaracetinberk/madlibs-game'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>CODE</button></a>
              <span> | </span>
            <a href='https://madlipsgame.netlify.app/'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>DEMO</button></a>
          </div>
         </div>
        </div>
        <div className='portfolio-item'>
         <img src={p6} alt='project5' className='portfolio-img'/>
         <div className='project-section text-center w-full'>
          <div className='project-title font-bold pb-4'>
            Portfolio Website
          </div>
          <div className='project-link'>
            <a href='https://github.com/dilaracetinberk/portfolio'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>CODE</button></a>
              <span> | </span>
            <a href='https://portfolio-tan-tau-15.vercel.app/'>
              <button type='button' className='font-semibold rounded-lg text-center mr-2 mb-2 '>DEMO</button></a>
          </div>
         </div>
        </div>
      </div>
      
    </div>
    </motion.div>
  )
}

export default Works