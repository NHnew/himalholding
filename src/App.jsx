import React, { useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import HR from './pages/HR';
import News from './pages/News';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import NotFound from './components/NotFound ';
import Contact from './pages/Contact';
import Residential from './components/Residential';

const App = () => {


  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/hr' element={<HR />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/residential' element={<Residential />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;


