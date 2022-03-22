import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Calculator from './components/calculator';


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
