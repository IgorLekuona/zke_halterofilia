import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import ZarautzSaria from './pages/ZarautzSaria';
import Contact from './pages/Contact';
import { Stripes } from './components/Stripes';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Stripes />
        <div className="container-fluid">
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/zarautz-saria' element={<ZarautzSaria/>} />
          </Routes>
        </div>
      </Router>
      <br/><br/>
      <Footer />
    </div>
  );
}

export default App;
