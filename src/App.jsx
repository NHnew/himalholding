import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import HR from './pages/HR';
import News from './pages/News';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/hr' element={<HR />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;