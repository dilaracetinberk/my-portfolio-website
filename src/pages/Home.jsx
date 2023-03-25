import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Works';

function Home() {
  return (
    <div>
        <Intro/>
        <About/>
        <Work/>
    </div>
  )
}

export default Home