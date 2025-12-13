import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Merge from './pages/Merge';
import Split from './pages/Split';
import Rotate from './pages/Rotate';
import AddMedia from './pages/AddMedia';
import Edit from './pages/Edit';
import Compress from './pages/Compress';

// Placeholder components for other routes
const Placeholder = ({ title }) => (
  <div className="glass-panel" style={{ padding: '2rem' }}>
    <h2>{title}</h2>
    <p style={{ marginTop: '1rem', color: '#94a3b8' }}>Feature coming soon...</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/merge" element={<Merge />} />
          <Route path="/split" element={<Split />} />
          <Route path="/rotate" element={<Rotate />} />
          <Route path="/add-media" element={<AddMedia />} />
          <Route path="/compress" element={<Compress />} />
          <Route path="/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// src/App.js বা যেখানে আপনার <Routes> আছে

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'; // আপনার Layout.jsx এর সঠিক পথ
import Home from './pages/Home'; // একটি উদাহরণ হিসেবে
// ... অন্যান্য কম্পোনেন্ট

// --- নতুন আমদানি ---
import ContactUs from './pages/ContactUs'; 
// --------------------

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* --- Contact Us Route যোগ করুন --- */}
        <Route path="contact" element={<ContactUs />} /> 
        {/* ---------------------------------- */}
        
        {/* অন্যান্য রুট (যেমন merge, split, rotate, ইত্যাদি) */}
        <Route path="merge" element={<div>Merge PDF Page</div>} />
        {/* ... অন্যান্য রুট যোগ করুন */}
        
      </Route>
    </Routes>
  );
}
// export default App;
