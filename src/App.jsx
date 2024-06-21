import React, { useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import HR from './pages/HR';
import News from './pages/News';
import VideoCarusel from './components/VideoCarusel';
import Section1 from './components/Section1';
import ScrollTop from './components/ScrollTop';

const App = () => {

  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hr' element={<HR />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <VideoCarusel />
      <Section1 />
    </BrowserRouter>
  );
};

export default App;