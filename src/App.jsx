import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails'
import './App.css';

function App() {
  return (
    <div className="App box-border">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path="/projects/:id"  element={<ProjectDetails />} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
