import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PublicWaterQuality from './pages/PublicWaterQuality';
import IndustryDashboard from './pages/IndustryDashboard';
import IndustryLogin from './pages/IndustryLogin';
import QRScanner from './pages/QRScanner';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/water-quality" element={<PublicWaterQuality />} />
          <Route path="/industry/login" element={<IndustryLogin />} />
          <Route path="/industry/dashboard" element={<IndustryDashboard />} />
          <Route path="/scan/:sourceId" element={<QRScanner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;