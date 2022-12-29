import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Login, Signup, Overview, Quiz, Learning,
  Activities, Advocate, Benefit, Profile } from './pages';

const App = () =>(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/quiz" element={<Quiz />} />
        <Route path="/dashboard/learning" element={<Learning />} />
        <Route path="/dashboard/activities" element={<Activities />} />
        <Route path="/dashboard/advocate" element={<Advocate />} />
        <Route path="/dashboard/benefits" element={<Benefit />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App