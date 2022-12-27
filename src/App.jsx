import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login, Signup } from './pages';

const App = () =>(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App