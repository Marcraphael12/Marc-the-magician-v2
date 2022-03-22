import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components list
import Calculator from './components/calculator';
import Quote from './components/Pages/quote';
import Header from './components/Pages/header';
import Home from './components/Pages/home';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
