import React from 'react';
import profile from '../assets/DilaraCetinberk1.jpg';
// import '../style/Intro.css'

function Intro() {
  return (
    <div className='intro font-sans'>
        <h1 className='section-title'>Hi, I am <strong>Dilara Cetinberk</strong></h1>
        <p className="section-subtitle section-subtitle-intro">FRONT-END DEVELOPER</p>
        <img src={profile} alt='profile' className='intro-img'/>

    </div>
  )
}

export default Intro